window.OONITranslations = {"en":{"Tests.WebConnectivity.Name":"Web Connectivity Test","Tests.Telegram.Name":"Telegram Test","Tests.Facebook.Name":"Facebook Messenger Test","Tests.WhatsApp.Name":"WhatsApp Test","Tests.HTTPInvalidReqLine.Name":"HTTP Invalid Request Line Test","Tests.HTTPHeaderManipulation.Name":"HTTP Header Field Manipulation Test","Tests.NDT.Name":"NDT Speed Test","Tests.Dash.Name":"DASH Video Streaming Test","Tests.TorVanilla.Name":"Tor (Vanilla) Test","Tests.BridgeReachability.Name":"Tor Bridge Reachability Test","Tests.TCPConnect.Name":"TCP Connect Test","Tests.DNSConsistency.Name":"DNS Consistency Test","Tests.HTTPRequests.Name":"HTTP Requests Test","Tests.Groups.Webistes.Name":"Websites","Tests.Groups.Instant Messagging.Name":"Instant Messaging","Tests.Groups.Middlebox.Name":"Middleboxes","Tests.Groups.Performance.Name":"Performance","Tests.Groups.Circumvention.Name":"Circumvention","Tests.Groups.Legacy.Name":"Legacy","Measurement.Hero.Status.Anomaly":"Anomaly","Measurement.Hero.Status.Reachable":"OK","Measurement.Hero.Status.Error":"Error","Measurement.Hero.Status.Confirmed":"Confirmed Blocked","Measurement.Hero.Status.Down":"Website Down","Measurement.Hero.Status.Anomaly.DNS":"DNS","Measurement.Hero.Status.Anomaly.HTTP":"HTTP","Measurement.Hero.Status.Anomaly.TCP":"TCP/IP","Measurement.CommonSummary.Label.ASN":"Network","Measurement.CommonSummary.Label.Country":"Country","Measurement.CommonSummary.Label.DateTime":"Date & Time","Measurement.DetailsHeader.Runtime":"Runtime","Measurement.Status.Hint.Websites.Censorship":"","Measurement.Status.Hint.Websites.DNS":"DNS tampering","Measurement.Status.Hint.Websites.Error":"Error in detection","Measurement.Status.Hint.Websites.HTTPdiff":"HTTP blocking (a blockpage might be served)","Measurement.Status.Hint.Websites.HTTPfail":"HTTP blocking (HTTP requests failed)","Measurement.Status.Hint.Websites.NoCensorship":"No blocking detected","Measurement.Status.Hint.Websites.TCPBlock":"TCP/IP blocking","Measurement.Status.Hint.Websites.Unavailable":"Website down","Measurement.SummaryText.Websites.Accessible":"On {date}, {WebsiteURL} was accessible when tested on {network} in {country}.","Measurement.SummaryText.Websites.Anomaly":"On {date}, {WebsiteURL} presented signs of {BlockingReason} on {network} in {country}.\n\nThis might mean that {WebsiteURL} was blocked, but false positives can occur. \n\nPlease explore the network measurement data below.","Measurement.SummaryText.Websites.Anomaly.BlockingReason.DNS":"DNS tampering","Measurement.SummaryText.Websites.Anomaly.BlockingReason.TCP":"TCP/IP blocking","Measurement.SummaryText.Websites.Anomaly.BlockingReason.HTTP-failure":"HTTP blocking (HTTP requests failed)","Measurement.SummaryText.Websites.Anomaly.BlockingReason.HTTP-diff":"HTTP blocking (a blockpage might be served)","Measurement.SummaryText.Websites.ConfirmedBlocked":"On {date}, {WebsiteURL} was blocked on {network} in {country}.\n\nThis is confirmed because a block page was served, as illustrated through the network measurement data below.","Measurement.SummaryText.Websites.Failed":"On {date}, the test for {WebsiteURL} failed on {network} in {country}.","Measurement.SummaryText.Websites.Down":"On {date}, {WebsiteURL} was down on {network} in {country}.","Measurement.Details.Websites.Failures.Heading":"Failures","Measurement.Details.Websites.Failures.Label.HTTP":"HTTP Experiment","Measurement.Details.Websites.Failures.Label.DNS":"DNS Experiment","Measurement.Details.Websites.Failures.Label.Control":"Control","Measurement.Details.Websites.Failures.Values.Null":"null","Measurement.Details.Websites.DNSQueries.Heading":"DNS Queries","Measurement.Details.Websites.DNSQueries.Label.Resolver":"Resolver","Measurement.Details.Websites.TCP.Heading":"TCP Connections","Measurement.Details.Websites.TCP.NoData":"No data.","Measurement.Details.Websites.TCP.ConnectionTo":"Connection to {destination} {connectionStatus}.","Measurement.Details.Websites.TCP.ConnectionTo.Success":"succeeded","Measurement.Details.Websites.TCP.ConnectionTo.Failed":"failed","Measurement.Details.Websites.TCP.ConnectionTo.Blocked":"was blocked","Measurement.Details.Websites.HTTP.Heading":"HTTP Requests","Measurement.Details.Websites.HTTP.Label.Response":"Response","Measurement.Details.Websites.HTTP.NoData":"No Data","Measurement.Details.Websites.HTTP.Request.URL":"URL","Measurement.Details.Websites.HTTP.Response.Body":"Response Body","Measurement.Details.Websites.HTTP.Response.Headers":"Response Headers","Measurement.CommonDetails.Label.MsmtID":"Report ID","Measurement.CommonDetails.Label.Platform":"Platform","Measurement.CommonDetails.Label.SoftwareVersion":"OONI Probe version","Measurement.CommonDetails.Label.MKVersion":"Measurement Kit version","Measurement.CommonDetails.RawMeasurement.Heading":"Raw Measurement Data","Measurement.CommonDetails.RawMeasurement.Download":"Download JSON","Measurement.Hero.Status.NDT.Title":"Results","Measurement.Status.Info.Label.Download":"Download","Measurement.Status.Info.Label.Upload":"Upload","Measurement.Status.Info.Label.Ping":"Ping","Measurement.Status.Info.Label.Server":"Server","Measurement.Details.Performance.Heading":"Performance Details","Measurement.Details.Performance.Label.AvgPing":"Average Ping","Measurement.Details.Performance.Label.MaxPing":"Max Ping","Measurement.Details.Performance.Label.MSS":"MSS","Measurement.Details.Performance.Label.PktLoss":"Packet Loss","Measurement.Details.Performance.Label.OutOfOrder":"Out of Order","Measurement.Details.Performance.Label.Timeouts":"Timeouts","Measurement.Hero.Status.Dash.Title":"Results","Measurement.Status.Info.Label.VideoQuality":"Video Quality","Measurement.Status.Info.Label.Bitrate":"Median Bitrate","Measurement.Status.Info.Label.Delay":"Playout Delay","Measurement.Status.Hint.Telegram.Blocked":"Telegram is likely blocked","Measurement.Status.Hint.Telegram.Reachable":"Telegram is accessible","Measurement.Status.Hint.Telegram.Failed":"The Telegram test failed","Measurement.Details.SummaryText.Telegram.Reachable":"On {date}, Telegram was reachable on {network} in {country}. \n\nOONI's Telegram test successfully connected to Telegram's endpoints and web interface (web.telegram.org).","Measurement.Details.SummaryText.Telegram.AppFailure":"On {date}, the testing of Telegram's mobile app presented signs of blocking on {network} in {country}.\n\nThis might mean that Telegram's mobile app was blocked, but false positives can occur. \n\nPlease explore the network measurement data below. Check other Telegram measurements from the same network during the same time period (if they're available).","Measurement.Details.SummaryText.Telegram.DesktopFailure":"On {date}, the testing of Telegram's web interface (web.telegram.org) presented signs of blocking on {network} in {country}.\n\nThis might mean that web.telegram.org was blocked, but false positives can occur.\n\nPlease explore the network measurement data below. Check other Telegram measurements from the same network during the same time period (if they're available).","Measurement.Details.SummaryText.Telegram.DesktopAndAppFailure":"On {date}, the testing of Telegram's mobile app and web interface (web.telegram.org) presented signs of blocking on {network} in {country}.\n\nThis might mean that both Telegram's mobile app and web interface were blocked, but false positives can occur.\n\nPlease explore the network measurement data below. Check other Telegram measurements from the same network during the same time period (if they're available).","Measurement.Details.Telegram.Endpoint.Label.Mobile":"Mobile App","Measurement.Details.Telegram.Endpoint.Label.Web":"Telegram Web","Measurement.Details.Endpoint.Status.Okay":"Okay","Measurement.Details.Endpoint.Status.Failed":"Failed","Measurement.Details.Telegram.Endpoint.Status.Heading":"Endpoint Status","Measurement.Details.Telegram.Endpoint.ConnectionTo.Failed":"Connection to {destination} failed.","Measurement.Details.Telegram.Endpoint.ConnectionTo.Successful":"Connection to {destination} was successful.","Measurement.Details.Hint.WhatsApp.Reachable":"WhatsApp is accessible","Measurement.Status.Hint.WhatsApp.Blocked":"WhatsApp is likely blocked","Measurement.Status.Hint.WhatsApp.Failed":"The WhatsApp test failed","Measurement.Details.SummaryText.WhatsApp.Reachable":"On {date}, WhatsApp was reachable on {network} in {country}. \n\nOONI's WhatsApp test successfully connected to WhatsApp's endpoints, registration service and web interface (web.whatsapp.com).","Measurement.Details.SummaryText.WhatsApp.AppFailure":"On {date}, the testing of WhatsApp's mobile app presented signs of blocking on {network} in {country}.\n\nThis might mean that WhatsApp's mobile app was blocked, but false positives can occur. \n\nPlease explore the network measurement data below. Check other WhatsApp measurements from the same network during the same time period (if they're available).","Measurement.Details.SummaryText.WhatsApp.DesktopFailure":"On {date}, the testing of WhatsApp's web interface (web.whatsapp.com) presented signs of blocking on {network} in {country}.\n\nThis might mean that web.whatsapp.com was blocked, but false positives can occur.\n\nPlease explore the network measurement data below. Check other WhatsApp measurements from the same network during the same time period (if they're available).","Measurement.Details.SummaryText.WhatsApp.DesktopAndAppFailure":"On {date}, the testing of WhatsApp's mobile app and web interface (web.whatsapp.com) presented signs of blocking on {network} in {country}.\n\nThis might mean that both WhatsApp's mobile app and web interface were blocked, but false positives can occur.\n\nPlease explore the network measurement data below. Check other WhatsApp measurements from the same network during the same time period (if they're available).","Measurement.Details.WhatsApp.Endpoint.Label.Mobile":"Mobile App","Measurement.Details.WhatsApp.Endpoint.Label.Web":"WhatsApp Web","Measurement.Details.WhatsApp.Endpoint.Label.Registration":"Registration","Measurement.Details.WhatsApp.Endpoint.Status.Heading":"Endpoint Status","Measurement.Details.WhatsApp.Endpoint.ConnectionTo.Failed":"Connection to {destination} failed.","Measurement.Details.WhatsApp.Endpoint.ConnectionTo.Successful":"Connection to {destination} was successful.","Measurement.Status.Hint.FacebookMessenger.Reachable":"Facebook Messenger is accessible","Measurement.Status.Hint.FacebookMessenger.Blocked":"Facebook Messenger is likely blocked","Measurement.Status.Hint.FacebookMessenger.Failed":"The Facebook Messenger test failed","Measurement.Details.SummaryText.FacebookMessenger.Reachable":"On {date}, Facebook Messenger was reachable on {network} in {country}.","Measurement.Details.SummaryText.FacebookMessenger.TCPFailure":"TCP connections to Facebook's endpoints failed.","Measurement.Details.SummaryText.FacebookMessenger.DNSFailure":"DNS lookups did not resolve to Facebook IP addresses.","Measurement.Details.SummaryText.FacebookMessenger.DNSSuccess":"DNS lookups resolved to Facebook IP addresses.","Measurement.Details.SummaryText.FacebookMessenger.TCPSuccess":"TCP connections to Facebook's enpoints succeeded.","Measurement.Details.FacebookMessenger.TCP.Label.Title":"TCP connections","Measurement.Details.FacebookMessenger.DNS.Label.Title":"DNS lookups","Measurement.Details.FacebookMessenger.TCP.Label.Okay":"OK","Measurement.Details.FacebookMessenger.TCP.Label.Failed":"Failed","Measurement.Details.FacebookMessenger.DNS.Label.Okay":"OK","Measurement.Details.FacebookMessenger.DNS.Label.Failed":"Failed","Measurement.Details.FacebookMessenger.Endpoint.Status.Heading":"Endpoint Status","Measurement.Details.FacebookMessenger.Endpoint.ConnectionTo.Failed":"Connection to {destination} failed.","Measurement.Details.FacebookMessenger.Endpoint.ConnectionTo.Successful":"Connection to {destination} was successful.","Measurement.Hero.Status.HTTPHeaderManipulation.NoMiddleBoxes":"No middleboxes detected","Measurement.HTTPHeaderManipulation.NoMiddleBoxes.SummaryText":"On {date}, no network anomaly was detected on {network} in {country} when communicating with our servers.","Measurement.Hero.Status.HTTPHeaderManipulation.MiddleboxesDetected":"Network tampering","Measurement.HTTPHeaderManipulation.MiddleBoxesDetected.SummaryText":"On {date}, network traffic was manipulated when contacting our control servers. \n\nThis means that there might be a middlebox on {network} in {country}, which could be responsible for censorship and/or surveillance.","Measurement.Hero.Status.HTTPInvalidReqLine.NoMiddleBoxes":"No middleboxes detected","Measurement.HTTPInvalidReqLine.NoMiddleBoxes.SummaryText":"On {date}, no network anomaly was detected on {network} in {country} when communicating with our servers.","Measurement.Hero.Status.HTTPInvalidReqLine.MiddleboxesDetected":"Network tampering","Measurement.HTTPInvalidReqLine.MiddleboxesDetected.SummaryText":"On {date}, network traffic was manipulated when contacting our control servers. \n\nThis means that there might be a middlebox on {network} in {country}, which could be responsible for censorship and/or surveillance.","Measurement.HTTPInvalidReqLine.YouSent":"You Sent","Measurement.HTTPInvalidReqLine.YouReceived":"You Received","Measurement.Hero.Status.TorVanilla.Blocked":"Tor is likely blocked","Measurement.Hero.Status.TorVanilla.Reachable":"Tor is accessible","Measurement.Details.SummaryText.TorVanilla.Blocked":"On {date}, OONI's Vanilla Tor test did not manage to bootstrap a connection to the [Tor network](https://www.torproject.org/).\n\nThis might mean that access to the Tor network was blocked on {network} in {country}, but false positives can occur.\n\nPlease explore the network measurement data below. Check other Tor measurements from the same network during the same time period (if they're available).","Measurement.Details.SummaryText.TorVanilla.Reachable":"OONI's Vanilla Tor test successfully bootstrapped a connection to the [Tor network](https://www.torproject.org/).\n\nThis means that the Tor network was reachable from {network} in {country} on {date}.","Measurement.Details.VanillaTor.Endpoint.Label.Reachability":"Reachability","Measurement.Hero.Status.Default":"Measurement Report","Navbar.Search":"Search","Navbar.Countries":"Countries","Footer.Text.Slogan":"Global community measuring internet censorship around the world.","Footer.Heading.About":"About","Footer.Heading.OONIProbe":"OONI Probe","Footer.Heading.Updates":"Updates","Footer.Heading.SocialLinks":"","Footer.Link.About":"OONI","Footer.Link.DataPolicy":"Data Policy","Footer.Link.DataLicense":"Data License","Footer.Link.Contact":"Contact","Footer.Link.Probe":"Install","Footer.Link.Tests":"Tests","Footer.Link.Code":"Source code","Footer.Link.API":"API","Footer.Link.Blog":"Blog","Footer.Link.Twitter":"Twitter","Footer.Link.MailingList":"Mailing list","Footer.Link.Slack":"Slack","Footer.Text.Copyright":"© 2019 Open Observatory of Network Interference (OONI)","Footer.Text.CCommons":"Content available under a Creative Commons license.","CategoryCode.ALDR.Name":"Drugs & Alcohol","CategoryCode.REL.Name":"Religion","CategoryCode.PORN.Name":"Pornography","CategoryCode.PROV.Name":"Provocative Attire","CategoryCode.POLR.Name":"Political Criticism","CategoryCode.HUMR.Name":"Human Rights Issues","CategoryCode.ENV.Name":"Environment","CategoryCode.MILX.Name":"Terrorism and Militants","CategoryCode.HATE.Name":"Hate Speech","CategoryCode.NEWS.Name":"News Media","CategoryCode.XED.Name":"Sex Education","CategoryCode.PUBH.Name":"Public Health","CategoryCode.GMB.Name":"Gambling","CategoryCode.ANON.Name":"Circumvention tools","CategoryCode.DATE.Name":"Online Dating","CategoryCode.GRP.Name":"Social Networking","CategoryCode.LGBT.Name":"LGBTQ+","CategoryCode.FILE.Name":"File-sharing","CategoryCode.HACK.Name":"Hacking Tools","CategoryCode.COMT.Name":"Communication Tools","CategoryCode.MMED.Name":"Media sharing","CategoryCode.HOST.Name":"Hosting and Blogging","CategoryCode.SRCH.Name":"Search Engines","CategoryCode.GAME.Name":"Gaming","CategoryCode.CULTR.Name":"Culture","CategoryCode.ECON.Name":"Economics","CategoryCode.GOVT.Name":"Government","CategoryCode.COMM.Name":"E-commerce","CategoryCode.CTRL.Name":"Control content","CategoryCode.IGO.Name":"Intergovernmental Orgs.","CategoryCode.MISC.Name":"Miscellaneous content","CategoryCode.ALDR.Description":"Use and sale of drugs and alcohol","CategoryCode.REL.Description":"Religious issues, both supportive and critical","CategoryCode.PORN.Description":"Hard-core and soft-core pornography","CategoryCode.PROV.Description":"Provocative attire and portrayal of women wearing minimal clothing","CategoryCode.POLR.Description":"Critical political viewpoints","CategoryCode.HUMR.Description":"Human rights issues","CategoryCode.ENV.Description":"Discussions on environmental issues","CategoryCode.MILX.Description":"Terrorism, violent militant or separatist movements","CategoryCode.HATE.Description":"Disparaging of particular groups based on race, sex, sexuality or other characteristics","CategoryCode.NEWS.Description":"Major news websites, regional news outlets and independent media","CategoryCode.XED.Description":"Sexual health issues including contraception, STD's, rape prevention and abortion","CategoryCode.PUBH.Description":"Public health issues including HIV, SARS, bird flu, World Health Organization","CategoryCode.GMB.Description":"Online gambling and betting","CategoryCode.ANON.Description":"Anonymization, censorship circumvention and encryption","CategoryCode.DATE.Description":"Online dating sites","CategoryCode.GRP.Description":"Online social networking tools and platforms","CategoryCode.LGBT.Description":"LGBTQ+ communities discussing related issues (excluding pornography)","CategoryCode.FILE.Description":"File sharing including cloud-based file storage, torrents and P2P","CategoryCode.HACK.Description":"Computer security tools and news","CategoryCode.COMT.Description":"Individual and group communication tools including VoIP, messaging and webmail","CategoryCode.MMED.Description":"Video, audio and photo sharing","CategoryCode.HOST.Description":"Web hosting, blogging and other online publishing","CategoryCode.SRCH.Description":"Search engines and portals","CategoryCode.GAME.Description":"Online games and gaming platforms (excluding gambling sites)","CategoryCode.CULTR.Description":"Entertainment including history, literature, music, film, satire and humour","CategoryCode.ECON.Description":"General economic development and poverty","CategoryCode.GOVT.Description":"Government-run websites, including military","CategoryCode.COMM.Description":"Commercial services and products","CategoryCode.CTRL.Description":"Benign or innocuous content used for control","CategoryCode.IGO.Description":"Intergovernmental organizations including The United Nations","CategoryCode.MISC.Description":"Sites that haven't been categorized yet","Country.Heading.Overview":"Overview","Country.Heading.Websites":"Websites","Country.Heading.Apps":"Apps","Country.Heading.NetworkProperties":"Networks","Country.Overview.Heading.NwInterference":"In a nutshell","Country.Overview.NwInterference.Middleboxes.Blocked":"Middleboxes were detected on {middleboxCount} network(s)","Country.Overview.NwInterference.Middleboxes.Normal":"No middleboxes were detected on tested networks","Country.Overview.NwInterference.Middleboxes.NoData":"Not enough data available on middleboxes","Country.Overview.NwInterference.IM.Blocked":"Instant messaging apps were likely blocked","Country.Overview.NwInterference.IM.Normal":"No instant messaging apps were blocked on tested networks","Country.Overview.NwInterference.IM.NoData":"Not enough data available on instant messaging apps","Country.Overview.NwInterference.CircumventionTools.Blocked":"Circumvention tools were likely blocked","Country.Overview.NwInterference.CircumventionTools.Normal":"No circumvention tools were blocked on tested networks","Country.Overview.NwInterference.CircumventionTools.NoData":"Not enough data available on circumvention tools","Country.Overview.NwInterference.Websites.Blocked":"OONI data confirms the blocking of websites","Country.Overview.NwInterference.Websites.Normal":"The blocking of websites is not confirmed","Country.Overview.NwInterference.Websites.NoData":"Not enough data available on blocked websites","Country.Overview.Heading.TestsByClass":"Measurement Coverage by Test Class","Country.Overview.TestsByClass.Websites":"Websites","Country.Overview.TestsByClass.InstantMessaging":"Instant Messaging","Country.Overview.TestsByClass.Performance":"Performance","Country.Overview.TestsByClass.Middleboxes":"Middleboxes","Country.Overview.TestsByClass.Circumvention":"Circumvention Tools","Country.Overview.FeaturedResearch":"Research Reports","Country.Overview.FeaturedResearch.None":"We haven't published a research report based on OONI data from this country yet. \n\nWe encourage you to use OONI data for your research!","Country.Overview.SummaryTextTemplate":"Thanks to OONI Probe users, {measurementCount} network measurements have been collected from {countryName} since {startDate}. These measurements cover {networkCovered} local networks.\n\nExplore the data below to check the accessibility and/or blocking of sites and services.","Country.PeriodFilter.Label":"Show results from","Country.PeriodFilter.Option.30Days":"Last 30 Days","Country.PeriodFilter.Option.2Months":"Last 2 Months","Country.PeriodFilter.Option.3Months":"Last 3 Months","Country.PeriodFilter.Option.6Months":"Last 6 Months","Country.Websites.Description":"Are websites blocked? If so, how?\n\nThe following results were collected through the use of OONI's [Web Connectivity test](https://ooni.io/nettest/web-connectivity/), designed to measure the DNS, HTTP, and TCP/IP blocking of websites. \n\nMost of the tested websites are included in the [Citizen Lab's test list repository](https://github.com/citizenlab/test-lists). If you'd like to see results on the testing of different websites, please [contribute to test lists](https://ooni.io/get-involved/contribute-test-lists/) or test the sites of your choice via the [OONI Probe mobile app](https://ooni.io/install/). \n\nPlease note that unless a block page is served, some anomalous measurements may contain false positives. We therefore encourage you to examine anomalous measurements in depth and over time.","Country.Websites.Description.MoreLinkText":"","Country.Websites.Heading.BlockedByCategory":"Categories of Blocked Websites","Country.Websites.BlockedByCategory.Description":"Websites that fall under the following categories were blocked on the {selectedASN} network.","Country.Websites.TestedWebsitesCount":"URLs tested","Country.Websites.Labels.ResultsPerPage":"Results per page","Country.Websites.URLSearch.Placeholder":"Search for URL","Country.Websites.URLCharts.Legend.Label.Blocked":"Confirmed Blocked","Country.Websites.URLCharts.Legend.Label.Anomaly":"Anomaly","Country.Websites.URLCharts.Legend.Label.Accessible":"Accessible","Country.Websites.URLCharts.ExploreMoreMeasurements":"Explore more measurements","Country.Websites.URLCharts.Pagination.Previous":"Previous Page","Country.Websites.URLCharts.Pagination.Next":"Next Page","Country.Apps.Description":"Are instant messaging apps (like WhatsApp and Facebook Messenger) blocked? If so, do circumvention tools work?\n\nThe following results were collected through the use of [OONI Probe tests](https://ooni.io/nettest/) designed to measure the blocking of WhatsApp, Facebook Messenger, and Telegram. We also share results on the testing of circumvention tools, like [Tor](https://www.torproject.org/).","Country.Apps.Label.LastTested":"Last tested","Country.Apps.Label.TestedNetworks":"tested networks","Country.Apps.Button.ShowMore":"Show More","Country.NetworkProperties.Description":"What is the speed and performance of networks?\n\nThe following results were collected through the use of OONI Probe's performance and middlebox tests. You can check the speed and performance of tested networks, as well as video streaming performance. \n\nYou can also learn whether middleboxes were detected in tested networks. Middleboxes are network appliances that can be used for a variety of networking purposes (such as caching), but sometimes they're used to implement internet censorship and/or surveillance.","Country.NetworkProperties.Heading.Summary":"Summary","Country.NetworkProperties.Heading.Networks":"Networks","Country.NetworkProperties.InfoBox.Label.AverageDownload":"Average Download","Country.NetworkProperties.InfoBox.Label.AverageUpload":"Average Upload","Country.NetworkProperties.InfoBox.Label.Covered":"Covered","Country.NetworkProperties.InfoBox.Label.Middleboxes":"Middleboxes detected","Country.NetworkProperties.InfoBox.Units.Mbits":"Mbit/s","Country.NetworkProperties.InfoBox.Units.Networks.Singular":"Network","Country.NetworkProperties.InfoBox.Units.Networks.Plural":"Networks","Country.NetworkProperties.InfoBox.Label.AverageStreaming":"Average Streaming","Country.NetworkProperties.InfoBox.Label.AveragePing":"Average Ping","Country.NetworkProperties.InfoBox.Units.Milliseconds":"ms","Country.NetworkProperties.InfoBox.Label.Middleboxes.Found":"Middleboxes detected","Country.NetworkProperties.InfoBox.Label.Middleboxes.NotFound":"No middleboxes detected","Country.NetworkProperties.Button.ShowMore":"Show more networks","Search.Sidebar.Domain":"Domain","Search.Sidebar.Input.Placeholder":"e.g. https://twitter.com","Search.Sidebar.Status":"Status","Search.Sidebar.TestName":"Test Name","Search.Sidebar.TestName.AllTests":"Any","Search.Sidebar.Country":"Country","Search.Sidebar.Country.AllCountries":"Any","Search.Sidebar.ASN":"ASN","Search.Sidebar.ASN.example":"e.g. AS30722","Search.Sidebar.From":"From","Search.Sidebar.Until":"Until","Search.Sidebar.Button.FilterResults":"Filter Results","Search.FilterButton.AllResults":"All Results","Search.FilterButton.Confirmed":"Confirmed","Search.FilterButton.Anomalies":"Anomalies","Search.FilterButton.Search":"Search","Search.Bullet.Reachable":"Accessible","Search.Bullet.Anomaly":"Anomaly","Search.Bullet.Blocked":"Confirmed blocked","Search.Bullet.Error":"Error","Search.Filter.SortBy":"Sort by","Search.Filter.SortBy.Date":"Date","Search.WebConnectivity.Results.Reachable":"Accessible","Search.WebConnectivity.Results.Anomaly":"Anomaly","Search.WebConnectivity.Results.Blocked":"Confirmed","Search.WebConnectivity.Results.Error":"Error","Search.HTTPRequests.Results.Anomaly":"","Search.HTTPRequests.Results.Blocked":"","Search.HTTPRequests.Results.Error":"","Search.HTTPRequests.Results.Reachable":"","Search.WhatsApp.Results.Reachable":"Accessible","Search.WhatsApp.Results.Anomaly":"Likely blocked","Search.WhatsApp.Results.Error":"Error","Search.FacebookMessenger.Results.Reachable":"Accessible","Search.FacebookMessenger.Results.Anomaly":"Likely blocked","Search.FacebookMessenger.Results.Error":"Error","Search.Telegram.Results.Reachable":"Accessible","Search.Telegram.Results.Anomaly":"Likely blocked","Search.Telegram.Results.Error":"Error","Search.HTTPInvalidRequestLine.Results.Anomaly":"Anomaly","Search.HTTPInvalidRequestLine.Results.Reachable":"OK","Search.HTTPInvalidRequestLine.Results.Error":"Error","Search.HTTPHeaderFieldManipulation.Results.Anomaly":"Anomaly","Search.HTTPHeaderFieldManipulation.Results.Reachable":"OK","Search.HTTPHeaderFieldManipulation.Results.Error":"Error","Search.Test.Results.OK":"OK","Search.Test.Results.Error":"Error","Search.NDT.Results":"","Search.DASH.Results":"","Search.VanillaTor.Results":"","Search.BridgeReachability.Results":"","Search.LegacyTests.Results":"","Search.Results.Empty.Heading":"No Results Found","Search.Results.Empty.Description":"Please try changing the filters to get better results.","Search.Button.LoadMore":"Load more","Home.Banner.Title.UncoverEvidence":"Uncover evidence of internet censorship worldwide","Home.Banner.Subtitle.ExploreCensorshipEvents":"Open data collected by the global OONI community","Home.Banner.Button.Explore":"Explore","Home.Banner.Stats.Measurements":"Measurements","Home.Banner.Stats.Countries":"Countries","Home.Banner.Stats.Networks":"Networks","Home.About.SummaryText":"OONI Explorer is an open data resource on internet censorship around the world. Consisting of millions of network measurements collected from more than 200 countries since 2012, OONI Explorer sheds light on internet censorship and other forms of network interference worldwide.","Home.Websites&Apps.Title":"Blocking of Websites & Apps","Home.Websites&Apps.SummaryText":"Check the blocking of websites around the world. Explore data on the testing of WhatsApp, Facebook Messenger, and Telegram.","Home.Search&Filter.Title":"Search","Home.Search&Filter.SummaryText":"Dig through OONI measurements with a powerful search tool. Filter results to view measurements that present network anomalies by countries, networks, and date range.","Home.NetworkProperties.Title":"Network Performance","Home.NetworkProperties.SummaryText":"Check the speed and performance of thousands of networks around the world. Explore data on video streaming performance, and check whether middleboxes are present.","Home.MonthlyStats.Title":"Monthly coverage worldwide","Home.MonthlyStats.SummaryText":"Last month, [OONI Probe](https://ooni.io/install/) was run {runCount} times on {networkCount} networks in {countryCount} countries. Explore the monthly usage of OONI Probe through the stats below.","Home.Highlights.Title":"Highlights","Home.Highlights.Description":"OONI Explorer hosts millions of network measurements collected from more than 200 countries since 2012. Every day, OONI Explorer is updated with new measurements!\n\nWe share some highlights through OONI data.","Countries.Heading.JumpToContinent":"Jump to continent","Countries.Search.NoCountriesFound":"No countries found with '{searchTerm}'","Countries.Search.Placeholder":"Search for countries","Error.404.GoBack":"Go back","Error.404.Heading":"The requested page does not exist","Error.404.Message":"We could not find the content you were looking for. Maybe try {measurmentLink} or look at {homePageLink}.","Error.404.MeasurmentLinkText":"exploring some measurement","Error.404.HomepageLinkText":"the homepage","Country.Label.NoData":"No Data Available"}}