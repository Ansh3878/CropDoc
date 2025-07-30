
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, MessageSquare, User } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between border-b border-border/20 backdrop-blur-lg bg-cropdoc-dark/80">
      <div className="flex items-center gap-2">
        <Link to="/">
          <Leaf 
            className="text-cropdoc-green"
            size={28}
          />
        </Link>
        <Link to="/">
          <span className="text-xl font-bold text-cropdoc-green">CropDoc</span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/features" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Features</Link>
        <Link to="/how-it-works" className="text-sm text-foreground/80 hover:text-foreground transition-colors">How It Works</Link>
        <Link to="/testimonials" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Testimonials</Link>
        <Link to="/faq" className="text-sm text-foreground/80 hover:text-foreground transition-colors">FAQ</Link>
        <Link to="/contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
      </nav>
      <div className="flex items-center gap-3">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full p-0 w-10 h-10">
                <Avatar>
                  <AvatarFallback className="bg-cropdoc-green text-white">
                    {user.email ? user.email.charAt(0).toUpperCase() : "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" className="bg-cropdoc-green hover:bg-cropdoc-green/90 text-white" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
