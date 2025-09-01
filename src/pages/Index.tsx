import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { GraduationCap, Plus, Grid3X3, School, Users, MapPin } from "lucide-react";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-bg relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="relative">
              <GraduationCap className="h-16 w-16 text-white mx-auto mb-6 animate-float" />
              <div className="absolute inset-0 h-16 w-16 mx-auto mb-6 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="accent-text font-extrabold">SchoolHub</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your comprehensive platform for managing school information. Add, view, and discover schools in your area with ease.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="button-themed h-12 px-8 text-base">
              <Link to="/add-school" className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add New School
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/schools" className="flex items-center gap-2">
                <Grid3X3 className="h-5 w-5" />
                Browse Schools
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose SchoolHub?</h2>
            <p className="text-lg text-muted-foreground">Streamlined school management made simple</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-themed text-center">
              <CardHeader>
                <School className="h-12 w-12 accent-text mx-auto mb-4 animate-float" />
                <CardTitle>Easy School Registration</CardTitle>
                <CardDescription>
                  Simple and intuitive form to add new schools with comprehensive details and validation
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-themed text-center">
              <CardHeader>
                <Grid3X3 className="h-12 w-12 accent-text mx-auto mb-4 animate-float" style={{ animationDelay: '0.2s' }} />
                <CardTitle>Visual Directory</CardTitle>
                <CardDescription>
                  Browse schools in an elegant grid layout with search and filter capabilities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-themed text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 accent-text mx-auto mb-4 animate-float" style={{ animationDelay: '0.4s' }} />
                <CardTitle>Location-Based</CardTitle>
                <CardDescription>
                  Find schools by city, state, or name with our powerful search functionality
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of educators and administrators using SchoolHub to manage their school directory
          </p>
          
          <Button asChild size="lg" className="button-themed h-12 px-8 text-base">
            <Link to="/add-school">
              Start Adding Schools Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
