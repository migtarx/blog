+++
title = 'Finally a Blog'
date = 2023-11-01
author = "migtarx"
slug = "onboarderland"
translationKey = "i18n-onboarderland"
description = "Finally a way to share my experiences and also to document all my processes! This looks promising!"
draft = false
cover = "https://i.imgur.com/sWGfAuc.jpg"
+++

So, after many hesitations and poking around in the world of blogs, I stumbled upon the website of a North American YouTuber I've been following for a while, [apalrd](https://www.youtube.com/@apalrdsadventures) (a geek in systems administration and Proxmox).

Digging into his website, I discovered it was built with something called **[HUGO](https://gohugo.io/)**.
- "But Miguel, what on earth is **HUGO**?!"

Well, **HUGO** is an open-source static website generator that simplifies the creation of fast and flexible web pages. It uses a streamlined structure based on plain text files and customizable templates. With a simple markdown file, creating new posts is a piece of cake.

It's not like WordPress, where you don't need to know anything to set up a blog and create posts... but what excites me about HUGO is its flexibility in accommodating whatever changes I want (styles, page structures...), and especially how spectacular code snippets look!

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
```
It's been at least a year and a half since I last used Java, haha (I actually asked ChatGPT to generate an example code for me), but mainly because I believe it's the language that best showcases code blocks.

The thing is, with **HUGO**, in a day, I've managed to learn how to use it more or less (setting up a theme, creating posts, and translations). And with the time I had left in the day, I set up a mini Express web server (MVP[^1]) to serve the static files after the **HUGO** build and configured the repository and GitHub workflows to deploy on my server.

>In other posts, I'll discuss my workflows (they're simple) and how I have my server set up with Proxmox.

The only drawback I find with HUGO is that if you want to interact with your readers, you have to come up with something. In my case, even though HUGO generates static files, you can still include fetch calls or XHR to the backend serving the static files (in my case, Express), so I'll come up with something to organize voting for new posts and a kind of newsletter.

Honestly, I don't know what else to tell you! I think it's not a bad first entry. I'm really excited to share my knowledge and experiences with all of you. I'm still contemplating what my next post will be...

Who knows, maybe about my transition from being an APPLE HATER to having all my day-to-day devices from them? Or perhaps about workflows in GitHub? 

[^1]: MVP: Minimum Viable Product.