
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const resetSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type ResetFormValues = z.infer<typeof resetSchema>;

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<ResetFormValues>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ResetFormValues) => {
    setIsLoading(true);
    try {
      // This is a simulation - would connect to backend in real implementation
      console.log("Password reset request for:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Reset link sent",
        description: "If an account exists with that email, you'll receive instructions shortly.",
      });
      
      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Failed to send reset email",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container flex items-center justify-center min-h-[calc(100vh-16rem)]">
        <div className="w-full max-w-md space-y-8 bg-background rounded-xl shadow-lg border p-8 animate-fade-in">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">Reset Password</h1>
            {!submitted ? (
              <p className="mt-2 text-muted-foreground">
                Enter your email to receive a password reset link
              </p>
            ) : (
              <p className="mt-2 text-muted-foreground">
                Check your inbox for further instructions
              </p>
            )}
          </div>

          {!submitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            type="email" 
                            className="pl-10" 
                            placeholder="you@example.com" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending reset link..." : "Send Reset Link"}
                </Button>
              </form>
            </Form>
          ) : (
            <div className="space-y-6">
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm">
                  We've sent an email to <span className="font-medium">{form.getValues().email}</span> with instructions to reset your password.
                </p>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setSubmitted(false)}
              >
                Try another email
              </Button>
            </div>
          )}

          <div className="pt-4 text-center text-sm">
            Remember your password?{" "}
            <Link to="/sign-in" className="text-primary hover:underline">
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
