import { useState } from "react";
import { Button } from "./ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Palette, Monitor, Zap, Leaf, Crown } from "lucide-react";

interface DesignSwitcherProps {
  onDesignChange: (design: string) => void;
  currentDesign: string;
}

const designs = [
  {
    id: 'default',
    name: 'Default',
    description: 'Clean and modern design',
    icon: Monitor,
    preview: 'bg-gradient-to-br from-blue-500 to-purple-600'
  },
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    description: 'Sleek and sophisticated',
    icon: Monitor,
    preview: 'bg-gradient-to-br from-indigo-500 to-purple-600'
  },
  {
    id: 'dark-neon',
    name: 'Dark Neon',
    description: 'Cyberpunk aesthetic',
    icon: Zap,
    preview: 'bg-gradient-to-br from-cyan-400 to-purple-500'
  },
  {
    id: 'nature-organic',
    name: 'Nature Organic',
    description: 'Warm and natural feel',
    icon: Leaf,
    preview: 'bg-gradient-to-br from-green-400 to-blue-500'
  },
  {
    id: 'luxury-elegant',
    name: 'Luxury Elegant',
    description: 'Premium and sophisticated',
    icon: Crown,
    preview: 'bg-gradient-to-br from-yellow-400 to-orange-500'
  }
];

const DesignSwitcher = ({ onDesignChange, currentDesign }: DesignSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 shadow-2xl border-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Palette className="h-5 w-5" />
              Choose Design Style
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {designs.map((design) => {
              const IconComponent = design.icon;
              return (
                <div
                  key={design.id}
                  className={`p-3 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                    currentDesign === design.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => {
                    onDesignChange(design.id);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-8 rounded ${design.preview} flex items-center justify-center`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{design.name}</h4>
                      <p className="text-xs text-muted-foreground">{design.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all"
      >
        <Palette className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default DesignSwitcher;