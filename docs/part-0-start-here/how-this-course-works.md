---
sidebar_position: 1
title: "How This Course Works"
description: "What the course covers, how lessons are built, and the rules for working safely in a live ListEngage business unit."
---

You already know two Salesforce marketing platforms. This course adds the third. It teaches Marketing Cloud Engagement (MCE) by rebuilding LEOptical, the fictional eyecare client from the MCN course, and by tying every MCE concept back to the Marketing Cloud Account Engagement (MCAE) and Marketing Cloud Next (MCN) features you use today.

The goal is working fluency, not certification. When you finish, you should be able to read an MCE account, follow what a consultant built, and build the common pieces yourself. If you want the Marketing Cloud Engagement Specialist certification afterwards, the course covers its topic areas, and the final part has exam-style questions.

## What Each Lesson Looks Like

Every lesson follows the same shape:

1. **Overview.** What the feature is and why LEOptical needs it.
2. **The lesson.** Concepts first, then the clicks.
3. **Lab.** Something you build in the ListEngage business unit (BU), or a walkthrough with screenshots where building it would touch shared settings.
4. **Success criteria.** What you should be able to see in the BU when you're done.
5. **Knowledge check.** A few questions to test yourself. Nothing is graded.
6. **How this compares.** A two-column callout that maps the lesson to MCN and to MCAE.

Here is what that last callout looks like:

<Compare mcn="The same lesson format as the ListEngage MCN enablement course." mcae="No course format to compare. MCAE skills transfer through the primer in the next lesson." />

## The LEOptical Scenario

LEOptical sells glasses, contact lenses and sunglasses online and in its clinics. It runs a four-tier loyalty program called VisionCare Rewards. In this course its marketing team has MCE, and you are building out the data, content, sends and journeys they need.

You will use small samples of the same data as the MCN course: contacts, loyalty members, ecommerce customers, orders and order items. The samples are added in Part 2.

## Working Safely in the ListEngage BU

The labs run in a business unit of ListEngage's real MCE account. Everything you build should be easy to identify and easy to clean up, and nothing should reach a real person. Follow these rules in every lab:

| Rule | Why |
| --- | --- |
| Prefix every asset with `CG_LEO_` | Anyone in the BU can tell what is training work. |
| Keep everything in a `CG LEOptical Course` folder in each Studio and Builder | Cleanup at the end is one folder per tool. |
| Import the 500-row samples only, never the full files | MCE bills on contact counts. Keeping the data small keeps training cheap. |
| Send only to `CG_LEO_Seed_Contacts`, which holds only your own test addresses | No lab email can reach a real customer. |
| Run automations once, then pause them. Stop journeys at the end of each lab | Nothing keeps running after you've moved on. |
| Read shared settings, don't change them | Sender profiles, delivery profiles, send classifications and BU settings belong to the account. Labs that need one create a `CG_LEO_` copy. |

:::warning[Check before you send]
Before every send or journey activation, open the target data extension and confirm it holds only your test addresses. This takes ten seconds and is the most important habit in the course.
:::

## Your Test Addresses

LEOptical has 10 "protagonist" customers, such as Maria Chen and James Okafor. You will give each one an email address you control, using plus-addressing on your own inbox: `yourname+mariac@listengage.com`, `yourname+jameso@listengage.com`, and so on. Every send in the course goes to these addresses, so you see exactly what a customer would see.

## Tracking Your Progress

Each lesson has a **Mark this lesson complete** checkbox at the bottom. The course overview page counts your progress and takes you to the next unfinished lesson. Progress is stored in this browser only, so it won't follow you to another computer.

## Lab: Set Up Your Course Folders

1. Log in to Marketing Cloud Engagement and switch to the ListEngage training BU using the business unit picker at the top of the screen.
2. In **Content Builder**, create a folder named `CG LEOptical Course`.
3. In **Email Studio**, go to **Subscribers > Data Extensions** and create a folder with the same name.
4. Write down your 10 plus-address test emails somewhere you can copy from. You'll use them in Part 2.

## Success Criteria

- You can switch to the training BU.
- The `CG LEOptical Course` folder exists in Content Builder and in Email Studio data extensions.
- You have a list of 10 plus-address test emails.

## Knowledge Check

- Why does the course import 500-row samples instead of the full LEOptical files?
- What should you check before every send or journey activation?
- Where is your course progress stored, and what does that mean if you switch laptops?
