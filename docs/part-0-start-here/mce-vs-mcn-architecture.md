---
sidebar_position: 3
title: "MCE vs. MCN Architecture"
description: "Where MCE runs, how its parts fit together, and how that compares with MCN and MCAE."
---

MCE is a separate platform from core Salesforce. It has its own login, its own data store and its own set of tools, and it connects to your CRM through a managed package. MCN takes the opposite approach: it is a marketing layer built on core Salesforce and Data 360. Knowing which model you're in explains most of the "why does it work this way" questions in the rest of the course.

## How MCE Is Organized

MCE grew out of ExactTarget, which Salesforce acquired in 2013. Its tools are called Studios and Builders, and each one owns one job:

| Tool | What it does | LEOptical uses it for |
| --- | --- | --- |
| Email Studio | Data extensions, lists, sends, tracking | Audiences and email sends |
| Content Builder | Emails, templates, content blocks, images | The LEOptical header, footer and campaign emails |
| Contact Builder | The contact model and relationships between data extensions | Linking orders and loyalty data to each customer |
| Automation Studio | Scheduled and triggered data work: imports, SQL, scripts | Rebuilding the lapsed-buyer audience every night |
| Journey Builder | Multi-step customer journeys | The welcome series and the win-back journey |
| CloudPages (Web Studio) | Landing pages, forms and preference centers | The VisionCare Rewards signup page |
| Mobile Studio | SMS and push messaging | Overview only in this course |

Data lives in **data extensions**, which are tables you create. People are identified by their **Subscriber Key**. Content is personalized with **AMPscript**, and data is reshaped with **SQL**.

## Three Platforms Side by Side

| | MCE | MCN | MCAE |
| --- | --- | --- | --- |
| Where it runs | Its own platform and login | Inside core Salesforce | Inside core Salesforce, with its own database behind it |
| Data layer | Data extensions you design | Data 360: data streams, DLOs, DMOs | The prospect record plus custom objects |
| Identity | Subscriber Key you choose | Unified Individual from identity resolution | Prospect matched on email or CRM ID |
| Audiences | SQL queries and filters, run on a schedule | Data 360 segments, published on a schedule | Static and dynamic lists |
| Automation | Automation Studio (data) and Journey Builder (people) | Salesforce Flow | Engagement Studio and automation rules |
| Content | Content Builder | Salesforce CMS | Email templates and snippets |
| Personalization | AMPscript, SSJS | Handlebars, with some AMPscript support | HML merge fields |
| Consent default | Opt-out | Explicit opt-in | Opt-out |
| CRM connection | Marketing Cloud Connect package | Native | Native |
| Typical fit | High-volume B2C | B2C and B2B on Data 360 | B2B lead nurturing |

## What This Means When You Work in MCE

- **You will design tables.** Before LEOptical can send anything, you create data extensions for its customers, orders and loyalty members. In MCN, the Marketing Data Kit and Data 360 did much of this for you.
- **You will see the data directly.** Data extensions are plain tables you can open, filter, import into and query. There is no virtual layer like DMOs.
- **Changes are immediate.** An import or a query lands in the data extension as soon as it runs. There is no Data 360 refresh chain to wait on.
- **Two logins.** CRM work happens in Salesforce, and marketing work happens in MCE. Marketing Cloud Connect moves data between them.

:::tip[Why ListEngage still sees so much MCE]
Many ListEngage clients have run MCE for years, and moving to MCN is a multi-year shift for most of them. Expect to work in accounts that run both, which is the subject of Part 9.
:::

## Success Criteria

- You can name the tool in MCE that would handle each of these: a nightly data refresh, a three-step welcome series, a reusable footer, and a signup page.
- You can explain the main difference between MCE's data extensions and MCN's DMOs.

## Knowledge Check

- Why does MCE need Marketing Cloud Connect when MCN doesn't?
- In MCN you waited for a data stream refresh, identity resolution and a Data Graph refresh. What replaces that chain in MCE?
- Which two of the three platforms are opt-out by default?

<Compare mcn="A marketing layer on Data 360: data streams, identity resolution, segments and Flow. MCN reads data through virtual DMOs, while MCE stores it in data extensions you design." mcae="One app on core built around the prospect. MCAE gives you a ready-made record. MCE gives you tables to build." />
