import { useState } from "react";
import { Button } from "./ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Palette } from "lucide-react";

interface ColorThemeSwitcherProps {
  onThemeChange: (theme: string) => void;
  currentTheme: string;
}

const colorThemes = [
  {
    id: 'default',
    name: 'Default Blue',
    description: 'Classic blue theme',
    colors: ['#3b82f6', '#1d4ed8', '#1e40af']
  },
  {
    id: 'theme-purple',
    name: 'Vibrant Purple',
    description: 'Modern purple gradients',
    colors: ['#8b5cf6', '#7c3aed', '#6d28d9']
  },
  {
    id: 'theme-ocean',
    name: 'Ocean Blue',
    description: 'Deep ocean vibes',
    colors: ['#0ea5e9', '#0284c7', '#0369a1']
  },
  {
    id: 'theme-sunset',
    name: 'Sunset Orange',
    description: 'Warm sunset colors',
    colors: ['#f97316', '#ea580c', '#dc2626']
  },
  {
    id: 'theme-forest',
    name: 'Forest Green',
    description: 'Natural green tones',
    colors: ['#059669', '#047857', '#065f46']
  },
  {
    id: 'theme-rose',
    name: 'Rose Pink',
    description: 'Elegant rose colors',
    colors: ['#e11d48', '#be185d', '#9f1239']
  },
  {
    id: 'theme-midnight',
    name: 'Midnight Dark',
    description: 'Dark professional look',
    colors: ['#1e293b', '#0f172a', '#020617']
  },
  {
    id: 'theme-emerald',
    name: 'Emerald Luxury',
    description: 'Luxurious emerald green',
    colors: ['#10b981', '#059669', '#047857']
  }
];

const ColorThemeSwitcher = ({ onThemeChange, currentTheme }: ColorThemeSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-96 shadow-2xl border-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Palette className="h-5 w-5" />
              Choose Color Theme
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 max-h-80 overflow-y-auto">
            {colorThemes.map((theme) => (
              <div
                key={theme.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                  currentTheme === theme.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {theme.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{theme.name}</h4>
                    <p className="text-xs text-muted-foreground">{theme.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-pink-500 to-violet-500"
      >
        <Palette className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ColorThemeSwitcher;