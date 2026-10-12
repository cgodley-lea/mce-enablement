---
sidebar_position: 2
title: "Sender Authentication and Sender Profiles"
description: "How MCE authenticates the sending domain, and how sender profiles, delivery profiles and send classifications decide what every email says it is from."
---

Before LEOptical can send an email, two questions need answers: is MCE allowed to send on behalf of LEOptical's domain, and what should every email say about who sent it? The first is answered once for the whole account, by the Sender Authentication Package. The second is answered in each business unit, by three small settings that every send uses: sender profiles, delivery profiles and send classifications.

## What You Will Learn

- What the Sender Authentication Package (SAP) includes and how it is set up
- How SPF, DKIM and DMARC fit together in MCE
- What sender profiles, delivery profiles and send classifications each control
- The difference between Commercial and Transactional sends
- How to inventory a business unit's sending setup without changing it

## The Sender Authentication Package

The **Sender Authentication Package (SAP)** is MCE's branding and authentication bundle. It includes:

| Part | What it does |
| --- | --- |
| **Authenticated private domain** | A domain or subdomain you own, such as `em.leoptical.com`, set up with SPF and DKIM so inbox providers can confirm MCE is allowed to send for it |
| **Link and image wrapping** | Tracked links and hosted images use your domain instead of a Marketing Cloud domain such as `exacttarget.com` |
| **Dedicated IP address** | An IP address used only by your account, so your sending reputation is your own |
| **Reply Mail Management (RMM)** | Handles replies to your emails: filters out-of-office messages, forwards real replies, and processes unsubscribe requests sent by reply |

An SAP is purchased through Salesforce and provisioned by Salesforce, and your IT team (or Salesforce, if it manages the DNS) adds the DNS records. Each MCE account (each MID) can have one SAP, though an account can have more than one private domain.

Without an SAP, links and images show Marketing Cloud's default domains. That works, but it looks less trustworthy to subscribers and inbox providers.

### SPF, DKIM and DMARC in one paragraph each

- **SPF** lists the servers allowed to send email for a domain. Inbox providers check that the sending server is on the list.
- **DKIM** adds a cryptographic signature to each email, proving it came from the domain it claims and wasn't changed on the way.
- **DMARC** is a policy published by the domain owner. It tells inbox providers what to do with mail that fails SPF and DKIM: deliver it, quarantine it, or reject it.

The SAP's private domain covers SPF and DKIM. DMARC is published by the domain owner, which means the client's IT team, not MCE.

:::tip[Coming from MCN?]
In MCN, you set up authenticated domains yourself in Setup under Unified Messaging, with no purchase and no support case. In MCE, the equivalent is part of the SAP, which is bought and provisioned through Salesforce. On most ListEngage MCE engagements the SAP already exists, and your job is to understand what it covers.
:::

## The Three Settings Every Send Uses

Inside each business unit, three settings decide what every email says about its sender. You'll find them in **Email Studio** under the **Admin** tab, in the **Send Management** section.

### Sender profiles

A **sender profile** holds the **From name** and **From email address**. A BU usually has several, such as one for promotions and one for service messages. The From name can be personalized, for example to show a customer's account rep, using a personalization string or AMPscript.

### Delivery profiles

A **delivery profile** holds what wraps around the email body:

- A header, often a "view as a web page" link
- A footer with the **physical mailing address** that CAN-SPAM requires
- The **unsubscribe link**

You can use the account's default delivery profile or choose another. If a send uses no delivery profile, the email itself must contain the physical address and unsubscribe link, or it won't send.

### Send classifications

A **send classification** combines one sender profile and one delivery profile with a **CAN-SPAM classification**:

- **Commercial** is for marketing email. It honors subscription status and opt-outs.
- **Transactional** is for messages that result from something the subscriber did, such as an order confirmation or password reset. It can be sent to someone who has unsubscribed from marketing, though you can still choose to honor opt-outs.

When you send, you pick a send classification, and its sender profile, delivery profile and Commercial or Transactional setting are all applied together.

:::warning[Transactional is a legal judgment, not a convenience]
Classifying a promotional email as Transactional so it reaches unsubscribed people is a compliance risk. Only true service messages qualify. If you're unsure, it's Commercial.
:::

### How they fit together

| Setting | Decides | Example for LEOptical |
| --- | --- | --- |
| Sender profile | Who the email is from | "LEOptical" `<news@em.leoptical.com>` |
| Delivery profile | The footer, address and unsubscribe link | LEOptical's mailing address and the standard unsubscribe link |
| Send classification | Which of the above to use, and Commercial or Transactional | "LEOptical Promotions": the promotions sender profile, the standard delivery profile, Commercial |

:::tip[Coming from MCAE?]
MCAE puts the sender on the email or list email itself, and the footer and unsubscribe link live in the email template. The closest thing to a Transactional send classification is MCAE's "operational email" setting, which also sends to opted-out prospects and carries the same compliance caution.
:::

## Lab: Inventory the Training BU's Sending Setup

You will record what the training BU already has. Don't edit or delete anything.

1. In **Email Studio**, open the **Admin** tab, then **Send Management**.
2. Open **Sender Profiles**. Record each profile's name, From name and From address.
3. Open **Delivery Profiles**. Record each profile's name, and whether its footer includes a physical address.
4. Open **Send Classifications**. For each one, record the sender profile, delivery profile, and whether it is Commercial or Transactional.
5. In **Setup**, use Quick Find to look for the private domain or Sender Authentication Package settings. Note the domain your BU sends from, if your role can see it.
6. Decide which existing send classification you would use for a LEOptical promotional email. If none fits, write down what a `CG_LEO_` copy would need. You'll create it in Part 4, not now.

## Success Criteria

- You have a written inventory of the training BU's sender profiles, delivery profiles and send classifications.
- You know which domain the BU sends from, or that your role can't see it.
- You have chosen (or specified) the send classification for LEOptical promotions.

## Knowledge Check

- What four things does a Sender Authentication Package include?
- A send uses no delivery profile, and the email has no unsubscribe link. What happens?
- What is the difference between a Commercial and a Transactional send classification? Give one LEOptical example of each.
- Which of SPF, DKIM and DMARC is the client's responsibility, not MCE's?

<Compare mcn="Authenticated domains, From addresses and Reply Mail Management, all set up yourself under Unified Messaging in Setup. Promotional or transactional is chosen on each email." mcae="Email sending domains with DKIM records, verified in MCAE settings. The sender is set on each email, the footer lives in the template, and the operational email setting is the closest match to Transactional." />
