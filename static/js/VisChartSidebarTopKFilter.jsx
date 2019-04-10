import React from "react";
import "../css/VisualisationPage";
import VisChartSidebarSelection from "./VisChartSidebarSelection";

export default class VisChartSidebarTopKFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.topKTog) {
      return (
        <div className="vis-select-filter-box">
          <VisChartSidebarSelection
            selectionTitle="Sort: "
            dropdownValues={["ascending", "descending"]}
            update={this.props.updateTopKSort}
            defaultValue={this.props.prevTopKSort ? this.props.prevTopKSort : null}
          />
          <VisChartSidebarSelection
            selectionTitle="Limit: "
            dropdownValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            update={this.props.updateTopKLimit}
            defaultValue={this.props.prevTopKLimit ? parseInt(this.props.prevTopKLimit) : null}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
