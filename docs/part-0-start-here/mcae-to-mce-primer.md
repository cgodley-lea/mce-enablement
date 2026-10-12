---
sidebar_position: 2
title: "MCAE to MCE: A Vocabulary Primer"
description: "The MCE equivalent of each MCAE concept you already use, and where the analogy breaks."
---

Most of MCE will feel familiar to an MCAE practitioner. You will still segment people, send emails, automate follow-ups and honor opt-outs. What changes is the vocabulary, and one big idea underneath it: MCE is built around **tables you design yourself**, not around a single prospect record.

This lesson gives you the translation table first, then walks through the five differences that cause the most confusion.

## The Translation Table

Read the table as "the closest thing in MCE." Several of these are close cousins rather than exact matches, and the notes say where the match breaks.

| In MCAE you say… | In MCE you say… | Where the match breaks |
| --- | --- | --- |
| Prospect | Subscriber (in Email Studio) or Contact (account-wide) | MCE has no single prospect record. A person's data is spread across data extensions. |
| Prospect matched on email or CRM ID | Subscriber Key | You choose the Subscriber Key, usually the CRM Contact or Lead ID. Changing it later is painful. |
| Prospect fields and custom fields | Data extension fields, or profile attributes | Fields belong to a table, not to the person. |
| Custom objects | Data extensions related in Contact Builder | Relationships are optional, and many teams skip them and use SQL instead. |
| Static list | List, or a data extension filled by import | Most MCE teams send to data extensions, not lists. |
| Dynamic list | SQL query activity on a schedule, or a filtered data extension | MCE doesn't keep a list "live". A query refreshes it when it runs. |
| Suppression list | Exclusion list, auto-suppression list, or an exclusion script | Several separate tools instead of one. |
| Email template | Content Builder template | Similar idea, built in a different editor. |
| Snippet | Content block (or a reusable AMPscript block) | Content blocks can be kept in sync across emails, or copied once. |
| HML merge field, e.g. `{{Recipient.FirstName}}` | Personalization string `%%FirstName%%`, or AMPscript | AMPscript can also look up data in other tables. HML can't. |
| Dynamic content | Dynamic content block | Rules run against data extension fields. |
| List email | User-initiated send from Email Studio | Same purpose. You pick a data extension or list as the audience. |
| Engagement Studio program | Journey in Journey Builder | Journeys add entry sources, goals and exit criteria. Engagement Studio's rules map to decision splits. |
| Automation rule | SQL query plus a scheduled automation in Automation Studio | Automation Studio works on data in bulk on a schedule, not on one prospect at a time. |
| Completion action | Journey entry, or a triggered send | No exact equivalent. Usually the form writes to a data extension that a journey listens to. |
| Form, form handler, landing page | CloudPages with Smart Capture | CloudPages can run AMPscript, so form handling is something you build. |
| Scoring and grading | No native equivalent | Einstein Engagement Scoring covers engagement, but there is no grade. |
| Email preference page | Subscription Center or a custom CloudPages preference center | Built on publication lists. |
| Email sending domain and tracker domain | Sender Authentication Package (SAP) | SAP is purchased and provisioned by Salesforce, not set up yourself. |
| Salesforce connector | Marketing Cloud Connect | A managed package with its own setup and its own sync rules. |
| Connected campaigns | Salesforce campaigns, through Marketing Cloud Connect | MCE's own "Campaigns" are only labels for grouping assets. |
| Business unit | Business unit | MCE BUs can share subscribers across the account. MCAE BUs are separate databases. |
| Email report | Tracking, data views, or reports | Raw engagement data lives in data views you query with SQL. |

## Five Differences That Trip People Up

### 1. You design the data model

In MCAE the prospect record exists before you do anything. In MCE, nothing exists until you create a data extension and decide its fields, its primary key and whether it can be sent to. That is more work up front, and it is also why MCE handles B2C volume and complex data well. Part 2 covers this in depth.

### 2. Segments are queries that run, not lists that stay live

An MCAE dynamic list updates itself as prospects change. In MCE you write a SQL query (or a filter) and schedule it. Between runs, the audience doesn't change. If you have used segments in MCN, this will feel similar: there, too, the audience is computed on a schedule.

### 3. Automation splits into two tools

MCAE puts most automation in one place. MCE splits it:

- **Automation Studio** moves and reshapes data in bulk: imports, SQL queries, scripts, file transfers.
- **Journey Builder** moves people through a series of messages, much like Engagement Studio.

A typical MCE program uses both. An automation builds the audience every night, and a journey sends to it.

### 4. Personalization is code

MCAE personalization is mostly merge fields and dynamic content. MCE adds AMPscript, a scripting language that runs inside the email. It can look up rows in other tables, loop over orders and format values. You don't need to be a developer to use it well. Part 3 starts with the five functions that cover most real emails.

### 5. Consent works like MCAE, not like MCN

Like MCAE, MCE is opt-out by default. A subscriber can receive email until they unsubscribe, bounce or are held. MCN is the outlier with its explicit opt-in model. Part 6 compares all three side by side.

## Lab: Translate LEOptical's MCAE Setup

Imagine LEOptical ran on MCAE before moving to MCE. For each item below, write down what you would build in MCE. Then open the answers and compare.

1. A dynamic list of Gold and Platinum loyalty members.
2. An Engagement Studio welcome program with three emails over two weeks.
3. A snippet holding the legal footer.
4. A form handler on the website's newsletter signup.
5. A completion action that adds form submitters to the welcome program.
6. A suppression list of competitors' email domains.
7. An automation rule that tags prospects who haven't purchased in 180 days.
8. `{{Recipient.FirstName}}` in a greeting.

<details>
<summary>Show suggested answers</summary>

1. A data extension filled by a scheduled SQL query (or a filtered data extension) selecting tier Gold or Platinum.
2. A journey with an entry source, three Email activities and Wait activities between them.
3. A content block in Content Builder.
4. A CloudPage with a Smart Capture form that writes to a data extension.
5. A journey whose entry source is that data extension, or a triggered send.
6. An exclusion script or auto-suppression list.
7. A SQL query in Automation Studio that writes lapsed buyers to a data extension, run on a schedule.
8. `%%FirstName%%`, or AMPscript with a fallback when the field is empty.

</details>

## Success Criteria

- You can give the MCE term for each MCAE concept in the table without looking.
- You can explain why MCE splits automation between Automation Studio and Journey Builder.
- Your lab answers match the suggested answers, or you can explain why yours differ.

## Knowledge Check

- What is a Subscriber Key, and why is choosing it an important early decision?
- An MCAE dynamic list updates continuously. What is the closest MCE pattern, and how is it different?
- Which MCE tool would you use to send a three-email welcome series? Which would you use to rebuild an audience every night?
- Is MCE opt-in or opt-out by default? Which of the three platforms is the odd one out?

<Compare mcn="Several of these terms map to MCN too: Subscriber Key to Unified Individual, SQL query activities to segments, Journey Builder to Flow, content blocks to CMS content blocks. The architecture lesson that follows covers the bigger differences." mcae="This whole lesson is the MCAE comparison. Keep the translation table open as you work through Parts 1 to 5." />
