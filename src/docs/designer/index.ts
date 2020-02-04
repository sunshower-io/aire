declare let SystemJS : any;

(window as any).mxBasePath = `${SystemJS.map['mxgraph']}/javascript/src`;

import {
  mxConstants,
  mxCell,
  mxGraph,
  mxHexagon,
  mxRubberband
} from 'mxgraph';

export class DesignerIndex {


  private graph : mxGraph;
  private container : HTMLDivElement;


  attached() {
    this.graph = new mxGraph(this.container);
    new mxRubberband(this.graph);
    this.attachNode();
  }

  private attachNode() : void {


    let node = new mxCell(),
      graph = this.graph,
      style = graph.getStylesheet().getDefaultVertexStyle();
    style[mxConstants.STYLE_SHAPE] = 'hexagon';
    style[mxConstants.STYLE_STROKECOLOR] = '#2385AF';
    style[mxConstants.STYLE_FILL_OPACITY] = 0;
    style[mxConstants.STYLE_STROKEWIDTH] = 2;
    style[mxConstants.STYLE_VERTICAL_LABEL_POSITION] = mxConstants.ALIGN_BOTTOM;
    style[mxConstants.STYLE_PERIMETER] = mxConstants.PERIMETER_HEXAGON;


    node.setVertex(true);


    let size = 64;


    graph.insertVertex(graph.getDefaultParent(), null, node, size, size, size, size - 8);
  }


}