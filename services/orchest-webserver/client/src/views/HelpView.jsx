import React from "react";

class HelpView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      readthedocs_quickstart_url:
        orchest.config.ORCHEST_WEB_URLS.readthedocs +
        "/getting_started/quickstart.html",
      readthedocs_url: orchest.config.ORCHEST_WEB_URLS.readthedocs,
      slack_url: orchest.config.ORCHEST_WEB_URLS.slack,
      github_url: orchest.config.ORCHEST_WEB_URLS.github,
      website_url: orchest.config.ORCHEST_WEB_URLS.website,
      knowledge_base_url:
        orchest.config.ORCHEST_WEB_URLS.website + "/knowledge-base",
    };
  }

  render() {
    return (
      <div className={"view-page help-list"}>
        <h2>Looking for help, or want to know more?</h2>
        <p className="push-down">
          The documentation should get you up to speed, but feel free to get in
          touch through Slack or GitHub for any questions or suggestions.
        </p>

        <div className="mdc-list">
          <a
            className="mdc-list-item"
            href={this.state.readthedocs_quickstart_url}
            target="_blank"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/readthedocs.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Quickstart</span>
          </a>
          <a
            className="mdc-list-item"
            href={this.state.readthedocs_url}
            target="_blank"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/readthedocs.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Documentation</span>
          </a>
          <a
            className="mdc-list-item"
            href={this.state.knowledge_base_url}
            target="_blank"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/favicon.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Knowledge base videos</span>
          </a>
          <a
            className="mdc-list-item"
            href={this.state.slack_url}
            target="_blank"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/slack.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Slack</span>
          </a>
          <a
            className="mdc-list-item"
            href={this.state.github_url}
            target="_blank"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/github.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">GitHub</span>
          </a>
          <a
            className="mdc-list-item"
            href={this.state.website_url}
            target="_blank"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/favicon.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Website</span>
          </a>
        </div>
      </div>
    );
  }
}

export default HelpView;
