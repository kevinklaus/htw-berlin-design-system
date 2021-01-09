import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { StoryLinkWrapper } from "./StoryLinkWrapper";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

// When the user clicks a button, it will trigger the `action()`,
// ultimately showing up in Storybook's addon panel.
function ButtonWrapper(props) {
  return <CustomButton {...props} />;
}

const onButtonClick = action("onButtonClick");

export default {
  title: "Design System/Button",
  component: Button,
  decorators: [withDesign],
};

export const AllButtons = (args) => (
  <div>
    <Button onClick={onButtonClick} appearance="primary">
      Primary
    </Button>
    <Button onClick={onButtonClick} appearance="secondary">
      Secondary
    </Button>
    <Button onClick={onButtonClick} appearance="tertiary">
      Tertiary
    </Button>
    <Button onClick={onButtonClick} appearance="outline">
      Outline
    </Button>
    <Button onClick={onButtonClick} appearance="primaryOutline">
      Outline primary
    </Button>
    <Button onClick={onButtonClick} appearance="secondaryOutline">
      Outline secondary
    </Button>
    <Button onClick={onButtonClick} appearance="primary" isDisabled>
      Disabled
    </Button>
    <br />
    <Button onClick={onButtonClick} appearance="primary" isLoading>
      Primary
    </Button>
    <Button onClick={onButtonClick} appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button onClick={onButtonClick} appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button onClick={onButtonClick} appearance="outline" isLoading>
      Outline
    </Button>
    <Button
      onClick={onButtonClick}
      appearance="outline"
      isLoading
      loadingText="Custom..."
    >
      Outline
    </Button>
    <br />
    <Button onClick={onButtonClick} appearance="primary" size="small">
      Primary
    </Button>
    <Button onClick={onButtonClick} appearance="secondary" size="small">
      Secondary
    </Button>
    <Button onClick={onButtonClick} appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button onClick={onButtonClick} appearance="outline" size="small">
      Outline
    </Button>
    <Button
      onClick={onButtonClick}
      appearance="primary"
      isDisabled
      size="small"
    >
      Disabled
    </Button>
    <Button
      onClick={onButtonClick}
      appearance="outline"
      size="small"
      containsIcon
    >
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button onClick={onButtonClick} appearance="outline" size="small">
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

AllButtons.storyName = "all buttons";

AllButtons.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/3G68UamepjyuhaTgi6knvD/HTW-Berlin-Design-System?node-id=178%3A6",
  },
};

export const buttonWrapper = (args) => (
  <div>
    <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary">
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary">
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary">
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline">
      Outline
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primaryOutline">
      Outline primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondaryOutline">
      Outline secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled>
      Disabled
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" isLoading>
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" isLoading>
      Outline
    </Button>
    <Button
      ButtonWrapper={ButtonWrapper}
      appearance="outline"
      isLoading
      loadingText="Custom..."
    >
      Outline
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" size="small">
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary" size="small">
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      Outline
    </Button>
    <Button
      ButtonWrapper={ButtonWrapper}
      appearance="primary"
      isDisabled
      size="small"
    >
      Disabled
    </Button>
    <Button
      ButtonWrapper={ButtonWrapper}
      appearance="outline"
      size="small"
      containsIcon
    >
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

buttonWrapper.storyName = "button wrapper";

export const AnchorWrapper = (args) => (
  <div>
    <StoryLinkWrapper to="http://storybook.js.org">
      Original Link Wrapper
    </StoryLinkWrapper>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      href="http://storybook.js.org"
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      href="http://storybook.js.org"
    >
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      href="http://storybook.js.org"
    >
      Tertiary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primaryOutline"
      href="http://storybook.js.org"
    >
      Outline primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondaryOutline"
      href="http://storybook.js.org"
    >
      Outline secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isDisabled
      href="http://storybook.js.org"
    >
      Disabled
    </Button>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isLoading
      href="http://storybook.js.org"
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      isLoading
      href="http://storybook.js.org"
    >
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      isLoading
      href="http://storybook.js.org"
    >
      Tertiary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      isLoading
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      isLoading
      loadingText="Custom..."
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      size="small"
      href="http://storybook.js.org"
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      size="small"
      href="http://storybook.js.org"
    >
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      size="small"
      href="http://storybook.js.org"
    >
      Tertiary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isDisabled
      size="small"
      href="http://storybook.js.org"
    >
      Disabled
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      containsIcon
      href="http://storybook.js.org"
    >
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      href="http://storybook.js.org"
    >
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

AnchorWrapper.storyName = "anchor wrapper";
