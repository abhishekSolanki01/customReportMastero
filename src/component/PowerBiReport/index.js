import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import "./index.css";
//anirudh.01116403220@ipu.ac.in
const PowerBiReport = () => {
  const [error, setError] = React.useState(false);
  return (
    <div style={{ padding: 20 }}>
      <h1>Power BI Report</h1>
      { error && <p>*If you encounter an error message saying 'Something went wrong', please refresh your token (inform me). Since this is a trial version, the token is only valid for 1 hour, so it needs to be refreshed regularly.</p>}
      <PowerBIEmbed
        embedConfig = {{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: '7e62e4fb-572a-4c08-8ae2-dbdf305027bd',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=7e62e4fb-572a-4c08-8ae2-dbdf305027bd&groupId=23071ede-9a23-4bf3-8edc-f89180332bec&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
          accessToken: process.env.REACT_APP_refreshToken,//'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCIsImtpZCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTkwZjgwNjUtZDVlNC00ODBlLWJlMWMtYmVlOTM1MWJhYzE3LyIsImlhdCI6MTczMzA0NDU5OSwibmJmIjoxNzMzMDQ0NTk5LCJleHAiOjE3MzMwNDk4MDMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WUFBQUF4cHBkYlVVQmFjUHZrUzdNdG5ER2ZaK0dJM0NIOFBKZXZ5eTkzTTBWMkc4L1IxOXZxVlltT25qK0dmcVFtalZaIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU29sYW5raSIsImdpdmVuX25hbWUiOiJBYmhpc2hlayIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI3LjQuMTc2LjIyNiIsIm5hbWUiOiJBYmhpc2hlayBTb2xhbmtpIiwib2lkIjoiMDcyN2FmMDMtMTRiMC00NDAzLThmNzQtNzAyMDFmOWJkYzFlIiwicHVpZCI6IjEwMDMyMDAzMThGRUIzNDciLCJyaCI6IjEuQVNzQVpZQVBHZVRWRGtpLUhMN3BOUnVzRndrQUFBQUFBQUFBd0FBQUFBQUFBQURDQU9ZckFBLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IldSd2FiWTY3cXVxNWhRWXdWQk5hMDRraTVWR1IwU3hUb25JWWVHUUJhNlEiLCJ0aWQiOiIxOTBmODA2NS1kNWU0LTQ4MGUtYmUxYy1iZWU5MzUxYmFjMTciLCJ1bmlxdWVfbmFtZSI6ImFiaGlzaGVrQGZpbnZlc3RmeC5jb20iLCJ1cG4iOiJhYmhpc2hla0BmaW52ZXN0ZnguY29tIiwidXRpIjoiRlpzVHd3Q1EzMGV2SC1FdVZUZC1BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMjIifQ.XTCUxucv02B2j8a0Jo2D519HFyzPg5OZlF--A6h8z3h3Q5dYLQaeDrlNu38Wqufk0lLKpxwTBUoGiKa0FH_SoGoLPjstxAtesBRK6HlWyMJNFdfLnjQmmB004078Hbx4JcJy0J1Uv4dtqD_qfxuh_zpcoPRKXTKsiCwnJbAbTw6-M_JVID9VSL_VIsbkQIvoodWszUhOy1Wnc17HTwp9BfiOLCa7W8RttfAC981DfXynOOY7Cj8UCVG3sp1O-CvCQ2wz-2oHma8KA3-Mx58MOJbKy_QlTtjnZWCCz_faecBL0hEsfbqJKEgG4bRV4l6PW3O5I75hcmQ_SkwOK6MYVg',
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}

        eventHandlers = {
          new Map([
            ['loaded', function () {console.log('Report loaded');}],
            ['rendered', function () {console.log('Report rendered');}],
            ['error', function (event) { setError(true)}],
            ['visualClicked', () => console.log('visual clicked')],
            ['pageChanged', (event) => console.log(event)],
          ])
        }

        cssClassName = { "Embed-container" }

        getEmbeddedComponent = { (embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
      {/* <PowerBIEmbed
        embedConfig={{
          type: 'report',
          id: 'reportId',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=reportId',
          accessToken: 'accessToken',
          tokenType: 'Embed',
          settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: false,
          },
        }}
        eventHandlers={{
          loaded: () => {
            console.log('Report loaded');
          },
          error: (event) => {
            console.error('Error report', event.detail);
          },
        }}
        cssClassName={'report-style-class'}
      /> */}
    </div>
  );

}

export default PowerBiReport;