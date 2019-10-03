/**
 * @exclude
 */
import * as Identicon from "jdenticon";

import * as GitGraph            from '@gitgraph/js';
import {RoleBasedAccessControl} from "./rbac";

export class GroupControl {


  information: HTMLDivElement;

  iconFor(v: string) : string {
    return btoa(Identicon.toSvg(v, 64));
  }

  attached() {

    let options = {
      template: GitGraph.templateExtend( 'metro' as any, {
        colors: ['#660066', '#2385af', '#666666']
      }),
      branch: {
        lineWidth: 1

      },
      mode: 'compact',
      message: {
        displayAuthor:  false,
        displayBranch: true,
        displayHash: true,
        font: "normal 12pt Arial"
      },
      orientation: 'vertical-reverse'
    } as any;

    const customTagStyle = {
      bgColor: '#ff9900',
      strokeColor: 'orange',
      borderRadius: 0,
      pointerWidth: 0,
    };
    let gitgraph = GitGraph.createGitgraph(this.information, options);


    const master = gitgraph.branch('master');
    // Tag on branch
    master
      .commit()
      .tag('v1.0')
      .tag('Initial Release');
    master.commit();
    master.tag('v1.1').tag({
      name: 'Anvil Compaction',
      style: customTagStyle
    });

    master.commit({ tag: 'v1.2' }).tag({
      name: 'adding property',
      style: customTagStyle
    });
    master.commit();
    gitgraph.tag('v2.0');
    gitgraph.tag({
      name: 'latest',
      style: customTagStyle,
    });
    const a = gitgraph
      .branch('adding terraform')
      .commit();
    a
      .branch('saving progress...')
      .commit('sup')
      .tag('Mostly working')
      .merge('master')
      .tag('updating from master')
      .commit('world');
    master.merge('adding terraform');
    master.merge('saving progress...');
      // .merge('master')
      // .tag({name: 'done', style:customTagStyle});

    setTimeout(() => {
      let svg = this.information.firstElementChild as SVGAElement,
        g = svg.firstElementChild as SVGGElement;
      g.setAttribute("transform", "scale(0.5)");

    });

  }

  users = RoleBasedAccessControl.users;

  groups = ['operators', 'administrators', 'sysadmins'];
  roles = ['global:root', 'tenant:admin', 'tenant:user', 'current'];

}