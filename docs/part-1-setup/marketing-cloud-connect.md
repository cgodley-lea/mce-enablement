---
sidebar_position: 3
title: "Marketing Cloud Connect, Explained"
description: "How Marketing Cloud Connect links MCE to Salesforce CRM, what it syncs, and the decisions that are hard to undo."
---

MCE and Salesforce CRM are separate systems. **Marketing Cloud Connect** is the managed package that links them. It brings CRM records into MCE, lets journeys read and update CRM records, and can write email results back to CRM. Almost every ListEngage client running MCE uses it, and most implementation problems in MCE trace back to how it was set up.

This lesson is a walkthrough. Configuring Marketing Cloud Connect is an account-level change, so you read how it works and look at what exists in the training account without changing anything.

## What You Will Learn

- What Marketing Cloud Connect is and how it is installed
- What it does: synchronized data sources, Journey Builder integration, and tracking written back to CRM
- Why synchronized data extensions can't be sent to directly
- The setup decisions that are hard or impossible to undo
- How to spot Marketing Cloud Connect in an existing account

## How It Is Put Together

Marketing Cloud Connect has a piece on each side:

- **In Salesforce CRM**, a managed package adds the connection settings, Marketing Cloud tabs, and objects that store email results.
- **In MCE**, the connection is made with a dedicated integration user and is managed from MCE Setup.

Once connected, CRM users can be mapped to MCE users, and data can flow in both directions.

## What It Does

### Synchronized data sources

You choose CRM objects, such as Contact, Lead or a custom object, and the fields to bring over. MCE copies them into **synchronized data extensions** and checks for changes on a schedule you set: every 15 minutes, 30 minutes or hour. You can also limit which records sync, for example only records where a checkbox is true.

In Contact Builder, synchronized data extensions appear under **Data Sources** and in a **Synchronized Data Extensions** folder. Each is named after its object, such as `Contact_Salesforce`.

Two rules shape how you use them:

1. **You can't send to a synchronized data extension directly.** You first copy the records you need into a regular sendable data extension, usually with a SQL query in Automation Studio. Part 2 covers this pattern.
2. **Syncing is on a schedule, not real time.** A change in CRM shows up in MCE at the next sync, not instantly.

### Journey Builder integration

Journeys can start from CRM events (for example, when a Contact or Case is created or changed). Journey activities can also act in CRM: create or update records, create tasks, or open and close cases. Part 5 uses this.

### Tracking written back to CRM

When enabled, email sends and engagement (opens, clicks, bounces) are written back to CRM as email result records, so sales and service teams can see what a contact received. This applies to sends to audiences built from CRM data, not to every MCE send.

:::tip[Coming from MCAE?]
MCAE's connector is built into the platform and syncs prospects and leads or contacts in both directions with little setup. Marketing Cloud Connect is a separate package with more choices to make: which objects sync, how often, which subscriber key to use, and which BU sees the data. It brings data in on a schedule rather than continuously keeping one shared record.
:::

## Decisions That Are Hard to Undo

These are the parts of a Marketing Cloud Connect setup that cause the most trouble later. Know them so you can ask the right questions on a client account.

| Decision | Why it matters |
| --- | --- |
| **The Subscriber Key** | With Marketing Cloud Connect, the Subscriber Key should be the CRM Contact or Lead ID. Accounts that started out using email addresses as the key can end up with duplicate contacts, and fixing that takes a migration. |
| **Syncing Contacts, Leads or Users** | Synced Contact, Lead and User records can become billable contacts as soon as they sync, before anyone sends to them. Syncing a whole CRM with millions of records has a real cost. |
| **Removing a synced object** | Once a sync starts, it can be paused but not deleted. Removing an object generally means disconnecting Marketing Cloud Connect entirely, which can break queries that depend on it. |
| **Which business units see synced data** | Synchronized data extensions are visible to the parent BU by default. Child BUs usually get the data through queries into shared data extensions. |
| **Multi-org connections** | Connecting one MCE account to more than one CRM org is enabled by Salesforce Support and is hard to reverse. |

## Walkthrough: Spot Marketing Cloud Connect in the Account

Look, but don't change anything. Some of these may not be visible to your role.

1. In **Contact Builder**, open **Data Sources**. Is there a **Synchronized** data source? If so, note which CRM objects are listed and how often they sync.
2. In **Contact Builder**, open the **Data Extensions** tab and look for a **Synchronized Data Extensions** folder. Note one data extension name.
3. In **Journey Builder**, start creating a new journey without saving it. In the entry source list, check whether **Salesforce Data** is available. Then cancel.
4. If you have access to the connected CRM org, check the App Launcher for a **Marketing Cloud** app or tab.

Record what you find. If the training BU has no synchronized data sources, that is common for child BUs. Write that down as your answer.

## Success Criteria

- You can explain what Marketing Cloud Connect does in two or three sentences.
- You have recorded whether the training BU can see synchronized data sources, and which objects if so.
- You can name two Marketing Cloud Connect decisions that are hard to undo, and why.

## Knowledge Check

- Why can't you send directly to a synchronized data extension? What do you do instead?
- A client's MCE account uses email addresses as Subscriber Keys. What risk does that create when they install Marketing Cloud Connect?
- A CRM user updates a contact's email address. When does MCE see the change?
- Why might syncing all Contacts from CRM increase a client's MCE bill?

## Part 1 Review

Test yourself on all of Part 1. These are written in the style of the Marketing Cloud Engagement Specialist exam.

1. A marketer can see a data extension in one business unit but not in another. What is the most likely reason?
2. A user is assigned two roles. Role A allows "Create" on Journey Builder. Role B explicitly denies it. What happens when the user tries to create a journey?
3. Which part of the Sender Authentication Package replaces Marketing Cloud's domain in tracked links?
4. An email is sent with a send classification that has no delivery profile, and the email body has no physical address. What happens?
5. LEOptical wants order confirmations to reach customers who unsubscribed from promotions. Which send classification type should those emails use, and what should they never contain?
6. A team wants to send to a synchronized `Contact_Salesforce` data extension. What do you recommend?
7. A client asks why their contact count jumped after connecting CRM, even though they haven't sent anything. What is the likely explanation?

<details>
<summary>Show answers</summary>

1. Data extensions belong to the BU they were created in unless they are placed in a shared folder. The marketer is looking in a BU where it wasn't created or shared.
2. The user can't create a journey. An explicit Deny always overrides an Allow.
3. Link and image wrapping on the authenticated private domain.
4. The send is blocked until a physical address and an unsubscribe link are added, either through a delivery profile or in the email.
5. Transactional. They should contain no promotional content, because that would misuse the Transactional classification.
6. Copy the needed records into a regular sendable data extension with a SQL query or filter, and send to that.
7. Synced Contact, Lead and User records can become billable contacts as soon as they sync.

</details>

<Compare mcn="No connector. MCN runs inside core Salesforce, and CRM objects reach Data 360 through the free CRM connector and the Marketing Data Kit." mcae="A built-in connector that keeps prospects and CRM leads or contacts in sync in both directions. Marketing Cloud Connect is a separate package with more decisions and a schedule-based sync." />
