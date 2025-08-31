import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useToast } from "../hooks/toast";
import { Upload, School, MapPin, Mail, Phone } from "lucide-react";
import Navigation from "../components/Navigation";

interface SchoolFormData {
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  image: FileList;
}

const AddSchool = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<SchoolFormData>();

  const watchImage = watch("image");

  // Handle image preview
  const handleImageChange = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: SchoolFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - In real implementation, this would connect to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "School has been added successfully.",
        variant: "default",
      });
      
      reset();
      setPreviewImage(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add school. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Watch for image changes
  if (watchImage && watchImage.length > 0) {
    handleImageChange(watchImage);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Add New School</h1>
            <p className="text-muted-foreground">Fill in the details to add a new school to the directory</p>
          </div>

          <Card className="shadow-lg border-border">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl flex items-center gap-2">
                <School className="h-6 w-6 text-primary" />
                School Information
              </CardTitle>
              <CardDescription>
                Provide comprehensive details about the school
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* School Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    School Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter school name"
                    {...register("name", { 
                      required: "School name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" }
                    })}
                    className="h-11"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Address *
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter complete address"
                    {...register("address", { required: "Address is required" })}
                    className="h-11"
                  />
                  {errors.address && (
                    <p className="text-sm text-destructive">{errors.address.message}</p>
                  )}
                </div>

                {/* City and State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium">
                      City *
                    </Label>
                    <Input
                      id="city"
                      placeholder="Enter city"
                      {...register("city", { required: "City is required" })}
                      className="h-11"
                    />
                    {errors.city && (
                      <p className="text-sm text-destructive">{errors.city.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-medium">
                      State *
                    </Label>
                    <Input
                      id="state"
                      placeholder="Enter state"
                      {...register("state", { required: "State is required" })}
                      className="h-11"
                    />
                    {errors.state && (
                      <p className="text-sm text-destructive">{errors.state.message}</p>
                    )}
                  </div>
                </div>

                {/* Contact and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-sm font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contact Number *
                    </Label>
                    <Input
                      id="contact"
                      placeholder="Enter contact number"
                      {...register("contact", {
                        required: "Contact number is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Contact must contain only numbers"
                        },
                        minLength: { value: 10, message: "Contact must be at least 10 digits" }
                      })}
                      className="h-11"
                    />
                    {errors.contact && (
                      <p className="text-sm text-destructive">{errors.contact.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email_id" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email_id"
                      type="email"
                      placeholder="Enter email address"
                      {...register("email_id", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address"
                        }
                      })}
                      className="h-11"
                    />
                    {errors.email_id && (
                      <p className="text-sm text-destructive">{errors.email_id.message}</p>
                    )}
                  </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image" className="text-sm font-medium flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    School Image *
                  </Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    {...register("image", { required: "School image is required" })}
                    className="h-11 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:hover:bg-primary-hover"
                  />
                  {errors.image && (
                    <p className="text-sm text-destructive">{errors.image.message}</p>
                  )}
                  
                  {/* Image Preview */}
                  {previewImage && (
                    <div className="mt-4">
                      <img
                        src={previewImage}
                        alt="School preview"
                        className="w-full max-w-xs mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg transition-all duration-200"
                >
                  {isSubmitting ? "Adding School..." : "Add School"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddSchool;