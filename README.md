# Web-Application-Stock-Search-using-Alpha-Vantage
Built a responsive web application to search for stock information for companies using the Stock quote API and produced dynamic web content. Created front end using JavaScript, JQuery, HTML, CSS, Bootstrap and Angular.js. Used AJAX to get the required data asynchronously. Displayed stock details using Highcharts Framework. Enhanced user experience by providing features like Facebook share, favorite list. Developed backend using Node.js to make API calls to retrieve the JSON data and deployed the application in AWS Elastic Beanstalk.



Below are some of the screenshots from the Web Application
The responsive website created using Bootstrap 3.


A user will first open a page as shown below in Figure 1, where he/she can enter the company name or symbol, and select from a list using autocomplete. A quote on a matched stock symbol can be performed.


<img width="883" alt="screen3" src="https://user-images.githubusercontent.com/23444062/38115027-751b00d4-335f-11e8-83ad-09aa241a4beb.png">

Stock Details section includes parsed JSON data from the Alpha Vantage API as shown below. The data is parsed and HighCharts framework is used to diplay the chart. There is also a facebook share button which allows us to share the HighChart on facebook as well as a favorite button which adds the company to the favorite list. All items can be marked as favorites which are stored using the HTML5 LocalStorage component.

<img width="888" alt="screen2" src="https://user-images.githubusercontent.com/23444062/38114998-53899070-335f-11e8-95b3-849ed945aac2.png">

Historical Section maps data from various intervals to interactive historical chart created using HighChart.

<img width="876" alt="screen4" src="https://user-images.githubusercontent.com/23444062/38115036-7d60d80e-335f-11e8-8552-d8c6e6bdff07.png">
