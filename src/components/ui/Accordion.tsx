"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

// Components
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ChevronDown } from "lucide-react";

// Class name merger
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={className} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-4 font-medium rounded-t-lg transition-all [&[data-state=open]>svg]:rotate-180 data-[state=closed]:rounded-b-lg hover:bg-primary-foreground",
        className
      )}
      {...props}
    >
      {/* Accordion title */}
      <section className="row-container gap-3">
        <Image
          src="/placeholder.jpg"
          className="w-[8rem] object-cover rounded-md"
          width={500}
          height={500}
          alt="placeholder"
        />
        <div className="col-container items-start">
          <h2 className="text-secondary tracking-widest">{props.title}</h2>
          <h3>{props.role}</h3>
          <h4 className="mb-2">{props.date}</h4>
          <div className="row-container gap-2">
            {props.badges.map((text) => (
              <Badge variant="outline">{text}</Badge>
            ))}
          </div>
        </div>
      </section>
      <ChevronDown className="text-secondary h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-black text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-secondary rounded-b-lg"
    {...props}
  >
    <div className={cn("p-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
