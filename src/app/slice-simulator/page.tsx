import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const { state } = await searchParams;
  const slices = getSlices(state);

  return (
    <SliceSimulator zIndex={10} background="">
      <div className="max-h-[900px] overflow-y-auto">
        <SliceZone slices={slices} components={components} />
      </div>
    </SliceSimulator>
  );
}
