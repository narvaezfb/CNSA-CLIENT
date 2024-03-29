import React from "react";

import InformationCardWrapper from "../InformationWrapper";
import securityImage from "../../../../assets/images/3567818.jpg";
import privacyImage from "../../../../assets/images/Data_security_03.jpg";
import { gridSpacing } from "store/constant";

// mui-ui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// material-ui
import { Grid } from "@material-ui/core";

export default function InternalSupport() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen1 = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClickOpen2 = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Typography align="center" variant="h1">
              Internal Support
            </Typography>
          </Grid>
          <InformationCardWrapper>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card sx={{ minWidth: 445 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={privacyImage}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <a href="https://www.freepik.com/vectors/business">
                          <h4>
                            Business vector created by jcomp - www.freepik.com
                          </h4>
                        </a>
                        Privacy
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This Privacy Policy describes CNSA policies and
                        procedures on the collection, use and disclosure of Your
                        information when You use the Service and tells You about
                        Your privacy rights and how the law protects You.
                      </Typography>
                      <div>
                        <Button onClick={handleClickOpen1("paper")}>
                          Learn more
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          scroll={scroll}
                          aria-labelledby="scroll-dialog-title"
                          aria-describedby="scroll-dialog-description"
                        >
                          <DialogTitle id="scroll-dialog-title">
                            <h1>Privacy Policy</h1>
                          </DialogTitle>
                          <DialogContent dividers={scroll === "paper"}>
                            <DialogContentText
                              id="scroll-dialog-description"
                              ref={descriptionElementRef}
                              tabIndex={-1}
                            >
                              <div>
                                <p>Last updated: December 16, 2021</p>
                                <p>
                                  We use Your Personal data to provide and
                                  improve the Service. By using the Service, You
                                  agree to the collection and use of information
                                  in accordance with this Privacy Policy. This
                                  Privacy Policy has been created with the help
                                  of the{" "}
                                  {/* <a
                                    href="https://www.privacypolicies.com/privacy-policy-generator/"
                                    target="_blank"
                                  >
                                    Privacy Policy Generator
                                  </a> */}
                                  .
                                </p>
                                <h1>Interpretation and Definitions</h1>
                                <h2>Interpretation</h2>
                                <p>
                                  The words of which the initial letter is
                                  capitalized have meanings defined under the
                                  following conditions. The following
                                  definitions shall have the same meaning
                                  regardless of whether they appear in singular
                                  or in plural.
                                </p>
                                <h2>Definitions</h2>
                                <p>For the purposes of this Privacy Policy:</p>
                                <ul>
                                  <li>
                                    <p>
                                      <strong>Account</strong> means a unique
                                      account created for You to access our
                                      Service or parts of our Service.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Company</strong> (referred to as
                                      either "the Company", "We", "Us" or "Our"
                                      in this Agreement) refers to CNSA, 1
                                      Toronto, L1F 054.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Cookies</strong> are small files
                                      that are placed on Your computer, mobile
                                      device or any other device by a website,
                                      containing the details of Your browsing
                                      history on that website among its many
                                      uses.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Country</strong> refers to:
                                      Ontario, Canada
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Device</strong> means any device
                                      that can access the Service such as a
                                      computer, a cellphone or a digital tablet.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Personal Data</strong> is any
                                      information that relates to an identified
                                      or identifiable individual.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Service</strong> refers to the
                                      Website.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Service Provider</strong> means
                                      any natural or legal person who processes
                                      the data on behalf of the Company. It
                                      refers to third-party companies or
                                      individuals employed by the Company to
                                      facilitate the Service, to provide the
                                      Service on behalf of the Company, to
                                      perform services related to the Service or
                                      to assist the Company in analyzing how the
                                      Service is used.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Usage Data</strong> refers to data
                                      collected automatically, either generated
                                      by the use of the Service or from the
                                      Service infrastructure itself (for
                                      example, the duration of a page visit).
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Website</strong> refers to CNSA,
                                      accessible from{" "}
                                      <a
                                        href="www.cnsa.com"
                                        rel="external nofollow noopener"
                                        target="_blank"
                                      >
                                        www.cnsa.com
                                      </a>
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>You</strong> means the individual
                                      accessing or using the Service, or the
                                      company, or other legal entity on behalf
                                      of which such individual is accessing or
                                      using the Service, as applicable.
                                    </p>
                                  </li>
                                </ul>
                                <h1>Collecting and Using Your Personal Data</h1>
                                <h2>Types of Data Collected</h2>
                                <h3>Personal Data</h3>
                                <p>
                                  While using Our Service, We may ask You to
                                  provide Us with certain personally
                                  identifiable information that can be used to
                                  contact or identify You. Personally
                                  identifiable information may include, but is
                                  not limited to:
                                </p>
                                <ul>
                                  <li>
                                    <p>Email address</p>
                                  </li>
                                  <li>
                                    <p>First name and last name</p>
                                  </li>
                                  <li>
                                    <p>
                                      Address, State, Province, ZIP/Postal code,
                                      City
                                    </p>
                                  </li>
                                  <li>
                                    <p>Usage Data</p>
                                  </li>
                                </ul>
                                <h3>Usage Data</h3>
                                <p>
                                  Usage Data is collected automatically when
                                  using the Service.
                                </p>
                                <p>
                                  Usage Data may include information such as
                                  Your Device's Internet Protocol address (e.g.
                                  IP address), browser type, browser version,
                                  the pages of our Service that You visit, the
                                  time and date of Your visit, the time spent on
                                  those pages, unique device identifiers and
                                  other diagnostic data.
                                </p>
                                <p>
                                  When You access the Service by or through a
                                  mobile device, We may collect certain
                                  information automatically, including, but not
                                  limited to, the type of mobile device You use,
                                  Your mobile device unique ID, the IP address
                                  of Your mobile device, Your mobile operating
                                  system, the type of mobile Internet browser
                                  You use, unique device identifiers and other
                                  diagnostic data.
                                </p>
                                <p>
                                  We may also collect information that Your
                                  browser sends whenever You visit our Service
                                  or when You access the Service by or through a
                                  mobile device.
                                </p>
                                <h3>Tracking Technologies and Cookies</h3>
                                <p>
                                  We use Cookies and similar tracking
                                  technologies to track the activity on Our
                                  Service and store certain information.
                                  Tracking technologies used are beacons, tags,
                                  and scripts to collect and track information
                                  and to improve and analyze Our Service. The
                                  technologies We use may include:
                                </p>
                                <ul>
                                  <li>
                                    <strong>Cookies or Browser Cookies.</strong>{" "}
                                    A cookie is a small file placed on Your
                                    Device. You can instruct Your browser to
                                    refuse all Cookies or to indicate when a
                                    Cookie is being sent. However, if You do not
                                    accept Cookies, You may not be able to use
                                    some parts of our Service. Unless you have
                                    adjusted Your browser setting so that it
                                    will refuse Cookies, our Service may use
                                    Cookies.
                                  </li>
                                  <li>
                                    <strong>Flash Cookies.</strong> Certain
                                    features of our Service may use local stored
                                    objects (or Flash Cookies) to collect and
                                    store information about Your preferences or
                                    Your activity on our Service. Flash Cookies
                                    are not managed by the same browser settings
                                    as those used for Browser Cookies. For more
                                    information on how You can delete Flash
                                    Cookies, please read "Where can I change the
                                    settings for disabling, or deleting local
                                    shared objects?" available at{" "}
                                    {/* <a
                                      href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_"
                                      rel="external nofollow noopener"
                                      target="_blank"
                                    >
                                      https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_
                                    </a> */}
                                  </li>
                                  <li>
                                    <strong>Web Beacons.</strong> Certain
                                    sections of our Service and our emails may
                                    contain small electronic files known as web
                                    beacons (also referred to as clear gifs,
                                    pixel tags, and single-pixel gifs) that
                                    permit the Company, for example, to count
                                    users who have visited those pages or opened
                                    an email and for other related website
                                    statistics (for example, recording the
                                    popularity of a certain section and
                                    verifying system and server integrity).
                                  </li>
                                </ul>
                                <p>
                                  Cookies can be "Persistent" or "Session"
                                  Cookies. Persistent Cookies remain on Your
                                  personal computer or mobile device when You go
                                  offline, while Session Cookies are deleted as
                                  soon as You close Your web browser. Learn more
                                  about cookies:{" "}
                                  {/* <a
                                    href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking"
                                    target="_blank"
                                  >
                                    Cookies by PrivacyPolicies Generator
                                  </a> */}
                                  .
                                </p>
                                <p>
                                  We use both Session and Persistent Cookies for
                                  the purposes set out below:
                                </p>
                                <ul>
                                  <li>
                                    <p>
                                      <strong>
                                        Necessary / Essential Cookies
                                      </strong>
                                    </p>
                                    <p>Type: Session Cookies</p>
                                    <p>Administered by: Us</p>
                                    <p>
                                      Purpose: These Cookies are essential to
                                      provide You with services available
                                      through the Website and to enable You to
                                      use some of its features. They help to
                                      authenticate users and prevent fraudulent
                                      use of user accounts. Without these
                                      Cookies, the services that You have asked
                                      for cannot be provided, and We only use
                                      these Cookies to provide You with those
                                      services.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>
                                        Cookies Policy / Notice Acceptance
                                        Cookies
                                      </strong>
                                    </p>
                                    <p>Type: Persistent Cookies</p>
                                    <p>Administered by: Us</p>
                                    <p>
                                      Purpose: These Cookies identify if users
                                      have accepted the use of cookies on the
                                      Website.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Functionality Cookies</strong>
                                    </p>
                                    <p>Type: Persistent Cookies</p>
                                    <p>Administered by: Us</p>
                                    <p>
                                      Purpose: These Cookies allow us to
                                      remember choices You make when You use the
                                      Website, such as remembering your login
                                      details or language preference. The
                                      purpose of these Cookies is to provide You
                                      with a more personal experience and to
                                      avoid You having to re-enter your
                                      preferences every time You use the
                                      Website.
                                    </p>
                                  </li>
                                </ul>
                                <p>
                                  For more information about the cookies we use
                                  and your choices regarding cookies, please
                                  visit our Cookies Policy or the Cookies
                                  section of our Privacy Policy.
                                </p>
                                <h2>Use of Your Personal Data</h2>
                                <p>
                                  The Company may use Personal Data for the
                                  following purposes:
                                </p>
                                <ul>
                                  <li>
                                    <p>
                                      <strong>
                                        To provide and maintain our Service
                                      </strong>
                                      , including to monitor the usage of our
                                      Service.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>To manage Your Account:</strong>{" "}
                                      to manage Your registration as a user of
                                      the Service. The Personal Data You provide
                                      can give You access to different
                                      functionalities of the Service that are
                                      available to You as a registered user.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>
                                        For the performance of a contract:
                                      </strong>{" "}
                                      the development, compliance and
                                      undertaking of the purchase contract for
                                      the products, items or services You have
                                      purchased or of any other contract with Us
                                      through the Service.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>To contact You:</strong> To
                                      contact You by email, telephone calls,
                                      SMS, or other equivalent forms of
                                      electronic communication, such as a mobile
                                      application's push notifications regarding
                                      updates or informative communications
                                      related to the functionalities, products
                                      or contracted services, including the
                                      security updates, when necessary or
                                      reasonable for their implementation.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>To provide You</strong> with news,
                                      special offers and general information
                                      about other goods, services and events
                                      which we offer that are similar to those
                                      that you have already purchased or
                                      enquired about unless You have opted not
                                      to receive such information.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>To manage Your requests:</strong>{" "}
                                      To attend and manage Your requests to Us.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>For business transfers:</strong>{" "}
                                      We may use Your information to evaluate or
                                      conduct a merger, divestiture,
                                      restructuring, reorganization,
                                      dissolution, or other sale or transfer of
                                      some or all of Our assets, whether as a
                                      going concern or as part of bankruptcy,
                                      liquidation, or similar proceeding, in
                                      which Personal Data held by Us about our
                                      Service users is among the assets
                                      transferred.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>For other purposes</strong>: We
                                      may use Your information for other
                                      purposes, such as data analysis,
                                      identifying usage trends, determining the
                                      effectiveness of our promotional campaigns
                                      and to evaluate and improve our Service,
                                      products, services, marketing and your
                                      experience.
                                    </p>
                                  </li>
                                </ul>
                                <p>
                                  We may share Your personal information in the
                                  following situations:
                                </p>
                                <ul>
                                  <li>
                                    <strong>With Service Providers:</strong> We
                                    may share Your personal information with
                                    Service Providers to monitor and analyze the
                                    use of our Service, to contact You.
                                  </li>
                                  <li>
                                    <strong>For business transfers:</strong> We
                                    may share or transfer Your personal
                                    information in connection with, or during
                                    negotiations of, any merger, sale of Company
                                    assets, financing, or acquisition of all or
                                    a portion of Our business to another
                                    company.
                                  </li>
                                  <li>
                                    <strong>With Affiliates:</strong> We may
                                    share Your information with Our affiliates,
                                    in which case we will require those
                                    affiliates to honor this Privacy Policy.
                                    Affiliates include Our parent company and
                                    any other subsidiaries, joint venture
                                    partners or other companies that We control
                                    or that are under common control with Us.
                                  </li>
                                  <li>
                                    <strong>With business partners:</strong> We
                                    may share Your information with Our business
                                    partners to offer You certain products,
                                    services or promotions.
                                  </li>
                                  <li>
                                    <strong>With other users:</strong> when You
                                    share personal information or otherwise
                                    interact in the public areas with other
                                    users, such information may be viewed by all
                                    users and may be publicly distributed
                                    outside.
                                  </li>
                                  <li>
                                    <strong>With Your consent</strong>: We may
                                    disclose Your personal information for any
                                    other purpose with Your consent.
                                  </li>
                                </ul>
                                <h2>Retention of Your Personal Data</h2>
                                <p>
                                  The Company will retain Your Personal Data
                                  only for as long as is necessary for the
                                  purposes set out in this Privacy Policy. We
                                  will retain and use Your Personal Data to the
                                  extent necessary to comply with our legal
                                  obligations (for example, if we are required
                                  to retain your data to comply with applicable
                                  laws), resolve disputes, and enforce our legal
                                  agreements and policies.
                                </p>
                                <p>
                                  The Company will also retain Usage Data for
                                  internal analysis purposes. Usage Data is
                                  generally retained for a shorter period of
                                  time, except when this data is used to
                                  strengthen the security or to improve the
                                  functionality of Our Service, or We are
                                  legally obligated to retain this data for
                                  longer time periods.
                                </p>
                                <h2>Transfer of Your Personal Data</h2>
                                <p>
                                  Your information, including Personal Data, is
                                  processed at the Company's operating offices
                                  and in any other places where the parties
                                  involved in the processing are located. It
                                  means that this information may be transferred
                                  to — and maintained on — computers located
                                  outside of Your state, province, country or
                                  other governmental jurisdiction where the data
                                  protection laws may differ than those from
                                  Your jurisdiction.
                                </p>
                                <p>
                                  Your consent to this Privacy Policy followed
                                  by Your submission of such information
                                  represents Your agreement to that transfer.
                                </p>
                                <p>
                                  The Company will take all steps reasonably
                                  necessary to ensure that Your data is treated
                                  securely and in accordance with this Privacy
                                  Policy and no transfer of Your Personal Data
                                  will take place to an organization or a
                                  country unless there are adequate controls in
                                  place including the security of Your data and
                                  other personal information.
                                </p>
                                <h2>Disclosure of Your Personal Data</h2>
                                <h3>Business Transactions</h3>
                                <p>
                                  If the Company is involved in a merger,
                                  acquisition or asset sale, Your Personal Data
                                  may be transferred. We will provide notice
                                  before Your Personal Data is transferred and
                                  becomes subject to a different Privacy Policy.
                                </p>
                                <h3>Law enforcement</h3>
                                <p>
                                  Under certain circumstances, the Company may
                                  be required to disclose Your Personal Data if
                                  required to do so by law or in response to
                                  valid requests by public authorities (e.g. a
                                  court or a government agency).
                                </p>
                                <h3>Other legal requirements</h3>
                                <p>
                                  The Company may disclose Your Personal Data in
                                  the good faith belief that such action is
                                  necessary to:
                                </p>
                                <ul>
                                  <li>Comply with a legal obligation</li>
                                  <li>
                                    Protect and defend the rights or property of
                                    the Company
                                  </li>
                                  <li>
                                    Prevent or investigate possible wrongdoing
                                    in connection with the Service
                                  </li>
                                  <li>
                                    Protect the personal safety of Users of the
                                    Service or the public
                                  </li>
                                  <li>Protect against legal liability</li>
                                </ul>
                                <h2>Security of Your Personal Data</h2>
                                <p>
                                  The security of Your Personal Data is
                                  important to Us, but remember that no method
                                  of transmission over the Internet, or method
                                  of electronic storage is 100% secure. While We
                                  strive to use commercially acceptable means to
                                  protect Your Personal Data, We cannot
                                  guarantee its absolute security.
                                </p>
                                <h1>Children's Privacy</h1>
                                <p>
                                  Our Service does not address anyone under the
                                  age of 13. We do not knowingly collect
                                  personally identifiable information from
                                  anyone under the age of 13. If You are a
                                  parent or guardian and You are aware that Your
                                  child has provided Us with Personal Data,
                                  please contact Us. If We become aware that We
                                  have collected Personal Data from anyone under
                                  the age of 13 without verification of parental
                                  consent, We take steps to remove that
                                  information from Our servers.
                                </p>
                                <p>
                                  If We need to rely on consent as a legal basis
                                  for processing Your information and Your
                                  country requires consent from a parent, We may
                                  require Your parent's consent before We
                                  collect and use that information.
                                </p>
                                <h1>Links to Other Websites</h1>
                                <p>
                                  Our Service may contain links to other
                                  websites that are not operated by Us. If You
                                  click on a third party link, You will be
                                  directed to that third party's site. We
                                  strongly advise You to review the Privacy
                                  Policy of every site You visit.
                                </p>
                                <p>
                                  We have no control over and assume no
                                  responsibility for the content, privacy
                                  policies or practices of any third party sites
                                  or services.
                                </p>
                                <h1>Changes to this Privacy Policy</h1>
                                <p>
                                  We may update Our Privacy Policy from time to
                                  time. We will notify You of any changes by
                                  posting the new Privacy Policy on this page.
                                </p>
                                <p>
                                  We will let You know via email and/or a
                                  prominent notice on Our Service, prior to the
                                  change becoming effective and update the "Last
                                  updated" date at the top of this Privacy
                                  Policy.
                                </p>
                                <p>
                                  You are advised to review this Privacy Policy
                                  periodically for any changes. Changes to this
                                  Privacy Policy are effective when they are
                                  posted on this page.
                                </p>
                                <h1>Contact Us</h1>
                                <p>
                                  If you have any questions about this Privacy
                                  Policy, You can contact us:
                                </p>
                                <ul>
                                  <li>By email: www.internalsupport.com</li>
                                </ul>
                              </div>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ minWidth: 445 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={securityImage}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <a href="https://www.freepik.com/vectors/technology">
                          {" "}
                          <h4>
                            Technology vector created by stories -
                            www.freepik.com
                          </h4>
                        </a>
                        Terms and Conditions
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        These terms and conditions outline the rules and
                        regulations for the use of CNSA's Website, located at
                        www.cnsa.com. By accessing this website we assume you
                        accept these terms and conditions.
                      </Typography>
                      <div>
                        <Button onClick={handleClickOpen2("paper")}>
                          Learn more
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          scroll={scroll}
                          aria-labelledby="scroll-dialog-title"
                          aria-describedby="scroll-dialog-description"
                        >
                          <DialogTitle id="scroll-dialog-title">
                            <h1>Terms and Conditions</h1>
                          </DialogTitle>
                          <DialogContent dividers={scroll === "paper"}>
                            <DialogContentText
                              id="scroll-dialog-description"
                              ref={descriptionElementRef}
                              tabIndex={-1}
                            >
                              <p>Welcome to CNSA!</p>

                              <p>
                                The following terminology applies to these Terms
                                and Conditions, Privacy Statement and Disclaimer
                                Notice and all Agreements: "Client", "You" and
                                "Your" refers to you, the person log on this
                                website and compliant to the Company’s terms and
                                conditions. "The Company", "Ourselves", "We",
                                "Our" and "Us", refers to our Company. "Party",
                                "Parties", or "Us", refers to both the Client
                                and ourselves. All terms refer to the offer,
                                acceptance and consideration of payment
                                necessary to undertake the process of our
                                assistance to the Client in the most appropriate
                                manner for the express purpose of meeting the
                                Client’s needs in respect of provision of the
                                Company’s stated services, in accordance with
                                and subject to, prevailing law of Netherlands.
                                Any use of the above terminology or other words
                                in the singular, plural, capitalization and/or
                                he/she or they, are taken as interchangeable and
                                therefore as referring to same.
                              </p>

                              <h3>
                                <strong>Cookies</strong>
                              </h3>

                              <p>
                                We employ the use of cookies. By accessing CNSA,
                                you agreed to use cookies in agreement with the
                                CNSA's Privacy Policy.{" "}
                              </p>

                              <p>
                                Most interactive websites use cookies to let us
                                retrieve the user’s details for each visit.
                                Cookies are used by our website to enable the
                                functionality of certain areas to make it easier
                                for people visiting our website. Some of our
                                affiliate/advertising partners may also use
                                cookies.
                              </p>

                              <h3>
                                <strong>License</strong>
                              </h3>

                              <p>
                                Unless otherwise stated, CNSA and/or its
                                licensors own the intellectual property rights
                                for all material on CNSA. All intellectual
                                property rights are reserved. You may access
                                this from CNSA for your own personal use
                                subjected to restrictions set in these terms and
                                conditions.
                              </p>

                              <p>You must not:</p>
                              <ul>
                                <li>Republish material from CNSA</li>
                                <li>
                                  Sell, rent or sub-license material from CNSA
                                </li>
                                <li>
                                  Reproduce, duplicate or copy material from
                                  CNSA
                                </li>
                                <li>Redistribute content from CNSA</li>
                              </ul>

                              <p>
                                This Agreement shall begin on the date hereof.
                                Our Terms and Conditions were created with the
                                help of the{" "}
                                <a href="https://www.privacypolicies.com/blog/sample-terms-conditions-template/">
                                  Terms And Conditions Template
                                </a>
                                .
                              </p>

                              <p>
                                Parts of this website offer an opportunity for
                                users to post and exchange opinions and
                                information in certain areas of the website.
                                CNSA does not filter, edit, publish or review
                                Comments prior to their presence on the website.
                                Comments do not reflect the views and opinions
                                of CNSA,its agents and/or affiliates. Comments
                                reflect the views and opinions of the person who
                                post their views and opinions. To the extent
                                permitted by applicable laws, CNSA shall not be
                                liable for the Comments or for any liability,
                                damages or expenses caused and/or suffered as a
                                result of any use of and/or posting of and/or
                                appearance of the Comments on this website.
                              </p>

                              <p>
                                CNSA reserves the right to monitor all Comments
                                and to remove any Comments which can be
                                considered inappropriate, offensive or causes
                                breach of these Terms and Conditions.
                              </p>

                              <p>You warrant and represent that:</p>

                              <ul>
                                <li>
                                  You are entitled to post the Comments on our
                                  website and have all necessary licenses and
                                  consents to do so;
                                </li>
                                <li>
                                  The Comments do not invade any intellectual
                                  property right, including without limitation
                                  copyright, patent or trademark of any third
                                  party;
                                </li>
                                <li>
                                  The Comments do not contain any defamatory,
                                  libelous, offensive, indecent or otherwise
                                  unlawful material which is an invasion of
                                  privacy
                                </li>
                                <li>
                                  The Comments will not be used to solicit or
                                  promote business or custom or present
                                  commercial activities or unlawful activity.
                                </li>
                              </ul>

                              <p>
                                You hereby grant CNSA a non-exclusive license to
                                use, reproduce, edit and authorize others to
                                use, reproduce and edit any of your Comments in
                                any and all forms, formats or media.
                              </p>

                              <h3>
                                <strong>Hyperlinking to our Content</strong>
                              </h3>

                              <p>
                                The following organizations may link to our
                                Website without prior written approval:
                              </p>

                              <ul>
                                <li>Government agencies;</li>
                                <li>Search engines;</li>
                                <li>News organizations;</li>
                                <li>
                                  Online directory distributors may link to our
                                  Website in the same manner as they hyperlink
                                  to the Websites of other listed businesses;
                                  and
                                </li>
                                <li>
                                  System wide Accredited Businesses except
                                  soliciting non-profit organizations, charity
                                  shopping malls, and charity fundraising groups
                                  which may not hyperlink to our Web site.
                                </li>
                              </ul>

                              <p>
                                These organizations may link to our home page,
                                to publications or to other Website information
                                so long as the link: (a) is not in any way
                                deceptive; (b) does not falsely imply
                                sponsorship, endorsement or approval of the
                                linking party and its products and/or services;
                                and (c) fits within the context of the linking
                                party’s site.
                              </p>

                              <p>
                                We may consider and approve other link requests
                                from the following types of organizations:
                              </p>

                              <ul>
                                <li>
                                  commonly-known consumer and/or business
                                  information sources;
                                </li>
                                <li>dot.com community sites;</li>
                                <li>
                                  associations or other groups representing
                                  charities;
                                </li>
                                <li>online directory distributors;</li>
                                <li>internet portals;</li>
                                <li>
                                  accounting, law and consulting firms; and
                                </li>
                                <li>
                                  educational institutions and trade
                                  associations.
                                </li>
                              </ul>

                              <p>
                                We will approve link requests from these
                                organizations if we decide that: (a) the link
                                would not make us look unfavorably to ourselves
                                or to our accredited businesses; (b) the
                                organization does not have any negative records
                                with us; (c) the benefit to us from the
                                visibility of the hyperlink compensates the
                                absence of CNSA; and (d) the link is in the
                                context of general resource information.
                              </p>

                              <p>
                                These organizations may link to our home page so
                                long as the link: (a) is not in any way
                                deceptive; (b) does not falsely imply
                                sponsorship, endorsement or approval of the
                                linking party and its products or services; and
                                (c) fits within the context of the linking
                                party’s site.
                              </p>

                              <p>
                                If you are one of the organizations listed in
                                paragraph 2 above and are interested in linking
                                to our website, you must inform us by sending an
                                e-mail to CNSA. Please include your name, your
                                organization name, contact information as well
                                as the URL of your site, a list of any URLs from
                                which you intend to link to our Website, and a
                                list of the URLs on our site to which you would
                                like to link. Wait 2-3 weeks for a response.
                              </p>

                              <p>
                                Approved organizations may hyperlink to our
                                Website as follows:
                              </p>

                              <ul>
                                <li>By use of our corporate name; or</li>
                                <li>
                                  By use of the uniform resource locator being
                                  linked to; or
                                </li>
                                <li>
                                  By use of any other description of our Website
                                  being linked to that makes sense within the
                                  context and format of content on the linking
                                  party’s site.
                                </li>
                              </ul>

                              <p>
                                No use of CNSA's logo or other artwork will be
                                allowed for linking absent a trademark license
                                agreement.
                              </p>

                              <h3>
                                <strong>iFrames</strong>
                              </h3>

                              <p>
                                Without prior approval and written permission,
                                you may not create frames around our Webpages
                                that alter in any way the visual presentation or
                                appearance of our Website.
                              </p>

                              <h3>
                                <strong>Content Liability</strong>
                              </h3>

                              <p>
                                We shall not be hold responsible for any content
                                that appears on your Website. You agree to
                                protect and defend us against all claims that is
                                rising on your Website. No link(s) should appear
                                on any Website that may be interpreted as
                                libelous, obscene or criminal, or which
                                infringes, otherwise violates, or advocates the
                                infringement or other violation of, any third
                                party rights.
                              </p>

                              <h3>
                                <strong>Your Privacy</strong>
                              </h3>

                              <p>Please read Privacy Policy</p>

                              <h3>
                                <strong>Reservation of Rights</strong>
                              </h3>

                              <p>
                                We reserve the right to request that you remove
                                all links or any particular link to our Website.
                                You approve to immediately remove all links to
                                our Website upon request. We also reserve the
                                right to amen these terms and conditions and
                                it’s linking policy at any time. By continuously
                                linking to our Website, you agree to be bound to
                                and follow these linking terms and conditions.
                              </p>

                              <h3>
                                <strong>
                                  Removal of links from our website
                                </strong>
                              </h3>

                              <p>
                                If you find any link on our Website that is
                                offensive for any reason, you are free to
                                contact and inform us any moment. We will
                                consider requests to remove links but we are not
                                obligated to or so or to respond to you
                                directly.
                              </p>

                              <p>
                                We do not ensure that the information on this
                                website is correct, we do not warrant its
                                completeness or accuracy; nor do we promise to
                                ensure that the website remains available or
                                that the material on the website is kept up to
                                date.
                              </p>

                              <h3>
                                <strong>Disclaimer</strong>
                              </h3>

                              <p>
                                To the maximum extent permitted by applicable
                                law, we exclude all representations, warranties
                                and conditions relating to our website and the
                                use of this website. Nothing in this disclaimer
                                will:
                              </p>

                              <ul>
                                <li>
                                  limit or exclude our or your liability for
                                  death or personal injury;
                                </li>
                                <li>
                                  limit or exclude our or your liability for
                                  fraud or fraudulent misrepresentation;
                                </li>
                                <li>
                                  limit any of our or your liabilities in any
                                  way that is not permitted under applicable
                                  law; or
                                </li>
                                <li>
                                  exclude any of our or your liabilities that
                                  may not be excluded under applicable law.
                                </li>
                              </ul>

                              <p>
                                The limitations and prohibitions of liability
                                set in this Section and elsewhere in this
                                disclaimer: (a) are subject to the preceding
                                paragraph; and (b) govern all liabilities
                                arising under the disclaimer, including
                                liabilities arising in contract, in tort and for
                                breach of statutory duty.
                              </p>

                              <p>
                                As long as the website and the information and
                                services on the website are provided free of
                                charge, we will not be liable for any loss or
                                damage of any nature.
                              </p>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </InformationCardWrapper>
        </Grid>
      </Grid>
    </>
  );
}
