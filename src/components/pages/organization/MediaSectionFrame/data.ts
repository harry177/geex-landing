import { StreamSection } from "../sections/StreamSection/StreamSection";
import { PhotoSection } from "../sections/PhotoSection/PhotoSection";
import { VideoSection } from "../sections/VideoSection/VideoSection";

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