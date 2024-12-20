---
title: "Tech - Azure Challenges website"
last_modified_at: 2022-12-21T08:20:02+08:00
show_date: true
categories:
  - Tech
tags:
  - Security
  - Website
gallery:
  - url: /assets/images/azure-challenges-website/icon.png
    image_path: /assets/images/azure-challenges-website/icon.png
header:
  teaser: /assets/images/azure-challenges-website/icon.png
excerpt: Website to learn and implement various Azure concepts and services.
---

<img style="margin-left:auto;margin-right:auto;display:block" src="/assets/images/azure-challenges-website/icon.png">

To improve my knowledge of Azure resources, how they can be configured securely and so others could learn more about this too, I made website that people can run through to create and configure resources in Azure.

The challenges on the site provide a clear outcome, but its up to the user how they configure the resource, whether its in the Azure portal or the command line.

As long as the website has Reader access to an Azure subscription, it can validate the resource has been created and configured correctly.
If successful the challenge is completed and the user can continue to the next one. If incorrect an error will appear for them to try again.

Quizzes are also sprinkled in, either multiple-choice or requires text input from the user.

**Potential future changes**

- Host the website statically in Blazor WebAssembly, configuring AD Auth to an application that the user consents too (so anyone can use it without having to host the website somewhere)
  - This could be a separate build alongside the existing Blazor server instance
- Add more challenges (flesh out Private Endpoint, more vnets, more bonus challenges)
- An 'admin' page, helpful for seeing progress of everyone taking part in the challenge

<div>
  <a href="https://github.com/ChrisWoody/AzureChallenges/" rel="noreferrer noopener" target="_blank" class="btn btn--primary">View the code on GitHub</a>
</div>
