// Single source of truth for the course outline.
// The homepage, progress tracking and `npm run scaffold` (lesson stubs) all read from here.

export type Lesson = {
  slug: string;
  title: string;
  hours: number;
  lab: string;
  mcn: string;
  mcae: string;
};

export type Part = {
  number: number;
  slug: string;
  title: string;
  summary: string;
  lessons: Lesson[];
};

export const course: Part[] = [
  {
    number: 0,
    slug: 'part-0-start-here',
    title: 'Start Here',
    summary: 'How the course works, a vocabulary primer for MCAE users, and where MCE sits next to MCN.',
    lessons: [
      {slug: 'how-this-course-works', title: 'How This Course Works', hours: 0.25, lab: 'Find your BU and set up your course folder', mcn: 'Same format as the MCN enablement course', mcae: 'No equivalent'},
      {slug: 'mcae-to-mce-primer', title: 'MCAE to MCE: A Vocabulary Primer', hours: 0.75, lab: 'Translate eight MCAE setups into MCE', mcn: 'No equivalent', mcae: 'Prospects, lists, Engagement Studio, completion actions, form handlers'},
      {slug: 'mce-vs-mcn-architecture', title: 'MCE vs. MCN Architecture', hours: 0.5, lab: 'None', mcn: 'A thin marketing layer on Data 360', mcae: 'One app on core, built around the prospect'},
    ],
  },
  {
    number: 1,
    slug: 'part-1-setup',
    title: 'Setup',
    summary: 'Business units, users, sender authentication and Marketing Cloud Connect.',
    lessons: [
      {slug: 'business-units-users-roles', title: 'Business Units, Users and Roles', hours: 0.75, lab: "Tour your BU's Setup", mcn: 'Permission sets; a BU maps to a data space', mcae: 'Business units and user roles'},
      {slug: 'sender-authentication', title: 'Sender Authentication and Sender Profiles', hours: 0.75, lab: "Find the BU's sender and delivery profiles", mcn: 'Authenticated domains in Unified Messaging', mcae: 'Email sending domains and DKIM'},
      {slug: 'marketing-cloud-connect', title: 'Marketing Cloud Connect, Explained', hours: 0.5, lab: 'Walkthrough', mcn: 'Native to core; no connector needed', mcae: 'Native sync with CRM'},
    ],
  },
  {
    number: 2,
    slug: 'part-2-data',
    title: 'Data',
    summary: 'The contact model, data extensions, Contact Builder and SQL.',
    lessons: [
      {slug: 'contact-model-subscriber-key', title: 'The Contact Model and Subscriber Key', hours: 0.75, lab: 'Find your test contacts in All Subscribers', mcn: 'Unified Individual from identity resolution', mcae: 'Prospect, matched on email or CRM ID'},
      {slug: 'data-extensions', title: 'Data Extensions: Sendable, Keys and Fields', hours: 0.75, lab: 'Build the LEOptical data extensions', mcn: 'DMOs and DLOs', mcae: 'Custom fields and custom objects'},
      {slug: 'importing-leoptical-data', title: 'Importing LEOptical Data', hours: 0.5, lab: 'Import the 500-row samples', mcn: 'CSV data streams', mcae: 'Prospect import'},
      {slug: 'contact-builder', title: 'Contact Builder and Attribute Groups', hours: 0.75, lab: 'Relate orders and loyalty to contacts', mcn: 'DMO relationships', mcae: 'Custom object relationships'},
      {slug: 'sql-query-activities', title: 'SQL Query Activities', hours: 1, lab: 'Write a Lapsed Buyers query', mcn: 'Segment containers and the lookback window', mcae: 'Dynamic list rules'},
      {slug: 'lists-filters-suppression', title: 'Lists, Filters and Suppression', hours: 0.25, lab: 'Build a filtered data extension and an exclusion', mcn: 'Segments with Exclude criteria', mcae: 'Static and dynamic lists, suppression lists'},
    ],
  },
  {
    number: 3,
    slug: 'part-3-content',
    title: 'Content',
    summary: 'Content Builder, AMPscript, dynamic content and a first look at SSJS.',
    lessons: [
      {slug: 'content-builder', title: 'Content Builder: Emails, Templates and Blocks', hours: 0.75, lab: 'Rebuild the LEOptical header and footer', mcn: 'Salesforce CMS and content blocks', mcae: 'Email templates and snippets'},
      {slug: 'ampscript-essentials', title: 'AMPscript Essentials', hours: 1, lab: 'Greeting with a fallback and a tier message', mcn: 'Handlebars and merge fields', mcae: 'HML merge fields'},
      {slug: 'ampscript-lookups-loops', title: 'AMPscript Lookups and Loops', hours: 0.5, lab: 'List recent orders with LookupRows', mcn: 'Repeater and queryFirst', mcae: 'Not possible natively'},
      {slug: 'dynamic-content', title: 'Dynamic Content Blocks', hours: 0.25, lab: 'Build a tier-based variation', mcn: 'Personalization Points', mcae: 'Dynamic content'},
      {slug: 'ssjs-read-and-modify', title: 'SSJS: Read and Modify', hours: 0.5, lab: 'Read and change a provided script', mcn: 'No equivalent', mcae: 'No equivalent'},
    ],
  },
  {
    number: 4,
    slug: 'part-4-sending',
    title: 'Sending',
    summary: 'Send classifications, testing, sending and troubleshooting.',
    lessons: [
      {slug: 'send-classifications', title: 'Send Classifications and Delivery Profiles', hours: 0.5, lab: "Inspect the BU's send classifications", mcn: 'Promotional vs. transactional set on the email', mcae: 'Operational email setting'},
      {slug: 'testing-and-sending', title: 'Testing and Sending an Email', hours: 1, lab: 'Preview, test and send to your seed list', mcn: 'Preview needs a published segment', mcae: 'Test lists and list emails'},
      {slug: 'send-logging-troubleshooting', title: 'Send Logging and Troubleshooting', hours: 0.5, lab: "Read a send's tracking", mcn: 'Not-sent reasons in reporting', mcae: 'Email report'},
    ],
  },
  {
    number: 5,
    slug: 'part-5-automation',
    title: 'Automation',
    summary: 'Automation Studio for data work and Journey Builder for customer paths.',
    lessons: [
      {slug: 'automation-studio', title: 'Automation Studio: Imports, Queries and Scripts', hours: 1.25, lab: 'Nightly lapsed-buyer automation, run once then paused', mcn: 'Flows plus Data 360 schedules', mcae: 'Automation rules'},
      {slug: 'journey-builder-entry-activities', title: 'Journey Builder: Entry Sources and Activities', hours: 1.25, lab: 'Welcome journey to your seed contacts', mcn: 'Segment- and record-triggered flows', mcae: 'Engagement Studio'},
      {slug: 'journey-builder-splits-goals', title: 'Journey Builder: Splits, Waits, Goals and Exits', hours: 1, lab: 'Add a tier split and exit criteria', mcn: 'Decision, Wait and path experiments', mcae: 'Rules, triggers and wait steps'},
      {slug: 'einstein-in-journeys', title: 'Einstein Features in Journeys', hours: 0.5, lab: 'Walkthrough', mcn: 'Einstein Send Time Optimization and Engagement Scoring', mcae: 'Einstein Behavior Scoring'},
    ],
  },
  {
    number: 6,
    slug: 'part-6-consent',
    title: 'Consent',
    summary: 'Subscription status, publication lists and preference centers.',
    lessons: [
      {slug: 'subscriptions-preference-centers', title: 'Subscriptions, Publication Lists and Preference Centers', hours: 1, lab: 'Build a publication list and preference page', mcn: 'Explicit opt-in per Communication Subscription', mcae: 'Opt-out and the email preference page'},
    ],
  },
  {
    number: 7,
    slug: 'part-7-reporting',
    title: 'Reporting',
    summary: 'Tracking, data views and reports.',
    lessons: [
      {slug: 'tracking-data-views-reports', title: 'Tracking, Data Views and Reports', hours: 1, lab: 'Query the _Sent and _Open data views', mcn: 'The Marketing Performance app', mcae: 'Email and campaign reports'},
    ],
  },
  {
    number: 8,
    slug: 'part-8-web-mobile',
    title: 'Web and Mobile',
    summary: 'CloudPages, Smart Capture and an overview of Mobile Studio.',
    lessons: [
      {slug: 'cloudpages-smart-capture', title: 'CloudPages and Smart Capture', hours: 0.5, lab: 'Signup page that writes to a data extension', mcn: 'Landing pages and forms', mcae: 'Landing pages and form handlers'},
      {slug: 'mobile-studio-overview', title: 'Mobile Studio and MobileConnect', hours: 0.5, lab: 'Send a test SMS to your own phone', mcn: 'SMS and WhatsApp channels', mcae: 'SMS through partner apps'},
    ],
  },
  {
    number: 9,
    slug: 'part-9-integration',
    title: 'Integration and Capstone',
    summary: 'MCE alongside MCN, a full win-back build, and an exam-style review.',
    lessons: [
      {slug: 'mce-alongside-mcn', title: 'MCE Alongside MCN', hours: 0.5, lab: 'None', mcn: 'The MCE connector into Data 360', mcae: 'The Account Engagement connector'},
      {slug: 'capstone-win-back', title: 'Capstone: LEOptical Lapsed-Buyer Win-Back', hours: 1, lab: 'Data, automation, journey and email, end to end', mcn: 'The same brief, built in MCN', mcae: 'No equivalent'},
      {slug: 'exam-style-review', title: 'Exam-Style Review', hours: 0.25, lab: '30 scenario questions', mcn: 'No equivalent', mcae: 'No equivalent'},
    ],
  },
];

export const lessonKey = (part: Part, lesson: Lesson) => `${part.slug}/${lesson.slug}`;
export const totalLessons = course.reduce((n, p) => n + p.lessons.length, 0);
export const totalHours = course.reduce((n, p) => n + p.lessons.reduce((m, l) => m + l.hours, 0), 0);
