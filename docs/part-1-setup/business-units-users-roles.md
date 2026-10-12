---
sidebar_position: 1
title: "Business Units, Users and Roles"
description: "How MCE accounts are organized into business units, how users and roles control access, and how to read your own access."
---

Every MCE account is organized into business units (BUs), and every user's access comes from roles assigned in a specific BU. Before you build anything, you need to know which BU you are in, what you can do there, and what is shared with the rest of the account. That is what this lesson covers.

## What You Will Learn

- How an MCE account is structured: the parent account, child business units and what they share
- How users, roles and permissions work, and why an explicit Deny always wins
- How to switch business units and confirm which one you are in
- How to read your own access in Setup without changing anything

## How an MCE Account Is Structured

An MCE account has a top-level business unit, often called the parent or Enterprise BU, and usually several child business units under it. Agencies like ListEngage often use child BUs to separate brands, regions, clients or, in our case, training work.

Each child BU has its own content, data extensions, sends, journeys and settings. Some things are shared across the account:

| Shared across the account | Kept in each BU |
| --- | --- |
| The **All Subscribers** list, the master list of everyone who can receive email | Content in Content Builder (unless placed in a shared folder) |
| **Shared data extensions** and shared content, placed in shared folders on purpose | Data extensions you create in the BU |
| Contacts in Contact Builder, which are counted for billing across the whole account | Sends, automations and journeys |
| Account-level settings, such as the Sender Authentication Package | Sender profiles, delivery profiles and send classifications |

Two consequences matter for this course:

- **Contacts are counted account-wide.** A contact you create in the training BU counts toward ListEngage's contact total, the same as one created in a client BU. This is why the course uses small samples.
- **Subscriber status can be shared.** If a test address unsubscribes from a training email, that status can apply across the account. Use only your own plus-addresses so this never affects anyone else.

:::tip[Coming from MCAE?]
In MCAE, each business unit is a separate database with its own prospects, and nothing is shared unless you copy it. In MCE, child BUs share a single subscriber list and contact count with the rest of the account, while content and data stay in each BU unless you deliberately share them.
:::

### Switching business units

Users can be given access to more than one BU. The current BU's name shows at the top of the screen, and clicking it opens a list of the BUs you can switch to. Always check the BU name before you build or send. Building in the wrong BU is one of the most common MCE mistakes.

## Users, Roles and Permissions

A user's access comes from **roles**, and each role is a bundle of **permissions**. Roles are assigned to a user in a business unit, so the same person can have different roles in different BUs. A role can also be assigned to a whole BU, in which case every user there inherits it.

Salesforce ships standard roles. The account-wide ones are named:

| Role | What it allows |
| --- | --- |
| Marketing Cloud Engagement Administrator | Assigns roles to users and manages channels, apps and tools |
| Marketing Cloud Engagement Channel Manager | Builds and runs campaigns and administers channels such as Email Studio |
| Marketing Cloud Engagement Content Editor/Publisher | Creates and delivers messages through the channel apps |
| Marketing Cloud Engagement Security Administrator | Maintains security settings and monitors user activity |
| Marketing Cloud Engagement Viewer | Views marketing activity and results |

Email Studio also has its own older roles, such as Administrator, Content Creator and Data Manager, which you may see on long-standing accounts. Accounts can also create custom roles.

Three rules decide what a user can actually do:

1. **Permissions are Allow, Deny or unset.**
2. **An explicit Deny always wins.** If any of a user's roles denies a permission, the user doesn't have it, even if another role allows it.
3. **Unset means no.** A permission that no role grants is denied.

:::tip[Coming from MCN?]
MCN uses Salesforce permission sets, which only add access. Nothing in a permission set can take access away. MCE's explicit Deny works the other way: one Deny can remove access that other roles grant. When something is unexpectedly blocked in MCE, look for a Deny first.
:::

### Where these live

MCE has its own **Setup**, separate from Salesforce Setup. Open it from your name or the gear icon at the top right. Use the **Quick Find** box to jump to:

- **Users**, to see users, their roles and the BUs they can access
- **Roles**, to see what each role allows or denies
- **Business Units**, to see the account's BU structure, if your role allows it

Depending on your role, some of these pages may be read-only or hidden. That is expected. In this course you only read them.

## Lab: Read Your Own Access

You will look at your own setup and record it. Don't change any settings.

1. Log in and confirm the BU name at the top of the screen is the ListEngage training BU. If not, switch to it.
2. Open **Setup** and use Quick Find to open **Users**.
3. Find your own user. Note your roles in the training BU, and any other BUs you can access.
4. Open **Roles** and find one of your roles. Note two permissions it allows, and check whether it denies anything.
5. Try Quick Find for **Business Units**. If you can see it, note the parent BU and how many child BUs there are. If you can't, write down that your role doesn't include it.
6. Copy the table below into your notes and fill it in.

| What | Your answer |
| --- | --- |
| Training BU name | |
| Your roles in that BU | |
| Other BUs you can access | |
| Can you see Business Units in Setup? | |
| One permission your role denies (if any) | |

## Success Criteria

- You can switch to the training BU and confirm you are in it.
- You have filled in the access table above without changing any settings.
- You can explain why contacts in the training BU count toward the whole account.

## Knowledge Check

- A user has two roles. One allows creating journeys, and the other explicitly denies it. Can the user create journeys? Why?
- Name two things child BUs share with the rest of the account and two things they keep separate.
- Why should every test send in this course go to your own plus-addresses?
- Where do you check which BU you are working in before you build something?

<Compare mcn="Salesforce permission sets, assigned in Salesforce Setup. A business unit maps to a Data 360 data space, a full data partition. Permission sets only add access, with no explicit Deny." mcae="Business units are fully separate databases, and access comes from user roles (Administrator, Marketing Manager, Marketing User, Sales Manager, Sales). MCE child BUs share the subscriber list and contact count, while MCAE BUs share nothing." />
