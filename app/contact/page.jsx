"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9576322595",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kundansingh957632@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Mohali Panjab India",
  },
];

const validateForm = (values) => {
  const errors = {};
  if (!values.firstname) errors.firstname = "Firstname is required";
  if (!values.lastname) errors.lastname = "Lastname is required";
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\+?\d{10,15}$/.test(values.phone)) {
    errors.phone = "Phone number is invalid";
  }
  if (!values.service) errors.service = "Service selection is required";
  if (!values.message) errors.message = "Message is required";
  return errors;
};

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formValues);
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log("Form submitted successfully:", formValues);
      // Reset form or show success message
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-purple-300 rounded-xl"
            >
              <h3 className="text-4xl text-[#3B134E]">Let's work together</h3>
              <p className="text-[#3B134E]/80">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                nihil sapiente pariatur id totam.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="firstname"
                    value={formValues.firstname}
                    onChange={handleChange}
                    placeholder="Firstname"
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm">{errors.firstname}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="lastname"
                    value={formValues.lastname}
                    onChange={handleChange}
                    placeholder="Lastname"
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm">{errors.lastname}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    type="tel"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
              {/* select */}
              <div>
                <Select
                  name="service"
                  value={formValues.service}
                  onValueChange={(value) =>
                    setFormValues((prevValues) => ({
                      ...prevValues,
                      service: value,
                    }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {errors.service && (
                  <p className="text-red-500 text-sm">{errors.service}</p>
                )}
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  className="h-[200px] border-gray-300"
                  placeholder="Type your message here."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              {/* btn */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 bg-[#3B134E] text-accent"
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
