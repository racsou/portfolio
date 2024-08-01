import { Builder } from "@builder.io/react";
import App from "./App";
import BuilderPage from "./builder-page";
import Contact from "./components/4-Contact/Contact";
import Counter from "./components/Counter/Counter";
import Footer from "./components/5-Footer/Footer";
import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-Main/Main";
import { RenderBuilderContent } from "./components/builder";

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(App, {
  name: "App",
});

Builder.registerComponent(BuilderPage, {
  name: "BuilderPage",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Hero, {
  name: "Hero",
});

Builder.registerComponent(Main, {
  name: "Main",
});

Builder.registerComponent(Contact, {
  name: "Contact",
});

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(RenderBuilderContent, {
  name: "RenderBuilderContent",
});
