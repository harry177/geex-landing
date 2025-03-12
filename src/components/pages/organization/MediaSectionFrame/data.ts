import { StreamSection } from "@/components/pages/organization/sections/StreamSection/StreamSection";
import { PhotoSection } from "@/components/pages/organization/sections/PhotoSection/PhotoSection";
import { VideoSection } from "@/components/pages/organization/sections/VideoSection/VideoSection";

export const mediaTabs = [
    {
      name: "media_section_frame.tabs.streams",
      amount: 4,
      component: StreamSection,
    },
    {
      name: "media_section_frame.tabs.photos",
      amount: 14,
      component: PhotoSection,
    },
    {
      name: "media_section_frame.tabs.videos",
      amount: 35,
      component: VideoSection,
    },
  ];