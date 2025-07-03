"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";

export default function CallToAction() {
    return (
        <section className="w-full relative mt-10 ">
            {/* Option 1: Using BackgroundPaths directly */}
            <BackgroundPaths title="Ready to Transform Your Business?" />
            
            {/* 
            Option 2: Custom implementation examples
            
            For more customization, you can import individual components:
            import { Button } from "@/components/ui/button";
            import { motion } from "framer-motion";
            
            Then create your own layout while using the same animated background
            */}
        </section>
    );
}