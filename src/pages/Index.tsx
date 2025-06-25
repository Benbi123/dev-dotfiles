import { TVAGPHeader } from "../components/TVAGPHeader";
import { LiveSection } from "../components/LiveSection";
import { NewsSection } from "../components/NewsSection";
import { RegionsSection } from "../components/RegionsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-tv-white">
      <TVAGPHeader />
      <main>
        <LiveSection />
        <NewsSection />
        <RegionsSection />
      </main>
    </div>
  );
};

export default Index;
