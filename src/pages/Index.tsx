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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">SchoolHub</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your comprehensive platform for managing school information. Add, view, and discover schools in your area with ease.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link to="/add-school" className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add New School
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <Link to="/schools" className="flex items-center gap-2">
                <Grid3X3 className="h-5 w-5" />
                Browse Schools
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose SchoolHub?</h2>
            <p className="text-lg text-muted-foreground">Streamlined school management made simple</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <School className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Easy School Registration</CardTitle>
                <CardDescription>
                  Simple and intuitive form to add new schools with comprehensive details and validation
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Grid3X3 className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Visual Directory</CardTitle>
                <CardDescription>
                  Browse schools in an elegant grid layout with search and filter capabilities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-success mx-auto mb-4" />
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
          
          <Button asChild size="lg" className="h-12 px-8 text-base bg-gradient-to-r from-primary to-accent hover:shadow-lg">
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
