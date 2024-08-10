import React from "react";
import { FaCheck, FaTimes, FaArrowRight } from "react-icons/fa";
import Button from "../components/Button";

const ButtonTest = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Button Test</h1>

      <h2 className="text-2xl font-semibold mb-4">Button Variants Test</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Button variant="default" className="w-full">
          Default
        </Button>
        <Button variant="destructive" className="w-full">
          Destructive
        </Button>
        <Button variant="outline" className="w-full">
          Outline
        </Button>
        <Button variant="secondary" className="w-full">
          Secondary
        </Button>
        <Button variant="ghost" className="w-full">
          Ghost
        </Button>
        <Button variant="success" className="w-full">
          Success
        </Button>
        <Button variant="gradient" className="w-full">
          Gradient
        </Button>
        <Button variant="outlineHover" className="w-full">
          Outline Hover
        </Button>
        <Button variant="glass" className="w-full">
          Glass
        </Button>
        <Button variant="animated" className="w-full">
          Animated
        </Button>
        <Button variant="neon" className="w-full bg-violet-600">
          Neon
        </Button>
        <Button variant="threeD" className="w-full">
          3D
        </Button>
        <Button variant="iconOnly" className="w-full">
          <FaCheck />
        </Button>
        <Button variant="pill" className="w-full">
          Pill
        </Button>
        <Button variant="iconOnly" className="w-full">
          <FaTimes />
        </Button>
        <Button variant="tag" className="w-full">
          Tag
        </Button>
        <Button variant="linkButton" className="w-full">
          Link Button
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Button Sizes Test</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Button variant="default" size="sm" className="w-full">
          Small
        </Button>
        <Button variant="default" size="md" className="w-full">
          Medium
        </Button>
        <Button variant="default" size="lg" className="w-full">
          Large
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Button with Icon Test</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Button
          variant="default"
          className="w-full"
          icon={<FaArrowRight />}
          iconPosition="left"
        >
          With Icon
        </Button>
        <Button
          variant="success"
          className="w-full"
          icon={<FaCheck />}
          iconPosition="center"
        >
          With Centered Icon
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Loading Button Test</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Button variant="default" className="w-full" loading>
          Loading
        </Button>
        <Button variant="success" className="w-full" loading>
          Loading Success
        </Button>
        <Button variant="destructive" className="w-full" loading>
          Loading Success
        </Button>
        <Button variant="typewriter" className="w-full">
          Typewriter Effect
        </Button>
        <Button variant="pulse" className="w-full">
          Pulse Effect
        </Button>
        <Button variant="liquid" className="w-full">
          Liquid Effect
        </Button>
      </div>
    </div>
  );
};

export default ButtonTest;
