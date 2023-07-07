import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "news-com-au",
        name: "News.com.au",
      },
      author: null,
      title: "Aussie icon brutally roasts entire country",
      description:
        "Australian brewing giant Carlton says it is shipping a limited edition &ldquo;England Bitter&rdquo; beer to England&rsquo;s cricketers to help them &ldquo;cool off&rdquo; from a row over their loss in the Second Test.",
      url: "https://www.news.com.au/sport/cricket/aussie-beer-icon-brutally-roasts-entire-country-after-ashes-scandal/news-story/b13d4855b6cfd42500e1d6b6644ff1c1",
      urlToImage:
        "https://content.api.news/v3/images/bin/63574fd37bfa16766dde26888102c13f",
      publishedAt: "2023-07-06T04:56:00Z",
      content:
        "Australian brewing giant Carlton says it is shipping a limited edition “England Bitter” beer to England’s cricketers to help them “cool off” from a row over their loss in the Second Test.\r\nThe newly … [+1907 chars]",
    },
    {
      source: {
        id: "talksport",
        name: "TalkSport",
      },
      author: "Jake Lambourne",
      title:
        "‘We’ve got nothing to lose’ – England and Australia set for feistiest Ashes test ever with players and Prim...",
      description:
        "Cricket fans are set for the feistiest Ashes test in recent history with England in a do or die encounter at Headingley. The Aussies are leading 2-0 after the opening two Test matches, with both ma…",
      url: "https://talksport.com/sport/cricket/1489116/england-australia-feistiest-ashes-test-ever/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2023/07/MM-TALKSPORT-ASHES.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      publishedAt: "2023-07-05T21:30:00Z",
      content:
        "Cricket fans are set for the feistiest Ashes test in recent history with England in a do or die encounter at Headingley.\r\nThe Aussies are leading 2-0 after the opening two Test matches, with both mat… [+4730 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = { articles: this.articles, loading: false };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
