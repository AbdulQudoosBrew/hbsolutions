"use client";

import Button from "@/components/ui/Button";
import ContactInfoItem from "@/components/ui/ContactInfoItem";
import Container from "@/components/ui/Container";
import FormField from "@/components/ui/FormField";
import Section from "@/components/ui/Section";
import TextSection from "@/components/ui/TextSection";
import { CONTACT_INFO } from "@/lib/constants/siteData";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  resetForm,
  setError,
  setSubmitted,
  setSubmitting,
  updateField,
} from "@/lib/store/slices/contactSlice";

export default function ContactSection() {
  const dispatch = useAppDispatch();
  const { form, isSubmitting, isSubmitted, error } = useAppSelector(
    (state) => state.contact
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setSubmitting(true));
    dispatch(setError(null));

    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch(setSubmitting(false));
    dispatch(setSubmitted(true));
  };

  return (
    <Section id="contact" background="white" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <TextSection
              title="General Enquiries"
              headingLevel="h2"
              align="left"
              color="dark"
            />

            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
              <ContactInfoItem title="Phone">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="text-lg transition-colors hover:text-[#1a1a1a]"
                >
                  {CONTACT_INFO.phone}
                </a>
              </ContactInfoItem>

              <ContactInfoItem title="Email">
                <a
                  href={CONTACT_INFO.emailHref}
                  className="transition-colors hover:text-[#1a1a1a]"
                >
                  {CONTACT_INFO.email}
                </a>
              </ContactInfoItem>

              <ContactInfoItem title="Head Office">
                <p>{CONTACT_INFO.address.company}</p>
                <p>{CONTACT_INFO.address.street}</p>
                <p>
                  {CONTACT_INFO.address.city}
                  <br />
                  {CONTACT_INFO.address.postcode}
                </p>
              </ContactInfoItem>
            </div>
          </div>

          <div>
            <TextSection
              title="Trade Enquiry"
              paragraphs={["For any enquiries please fill in the form below:"]}
              headingLevel="h2"
              align="left"
              color="dark"
            />

            {isSubmitted ? (
              <div className="mt-8 rounded border border-[#e0e0e0] bg-[#f8f8f8] p-8 text-center">
                <p className="text-sm text-[#333333]">
                  Thank you for your enquiry. We will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => dispatch(resetForm())}
                  className="mt-4 text-xs uppercase tracking-[0.2em] text-[#666666] hover:text-[#1a1a1a]"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8">
                <FormField
                  label="Full Name"
                  id="fullName"
                  value={form.fullName}
                  onChange={(value) =>
                    dispatch(updateField({ field: "fullName", value }))
                  }
                  required
                />
                <FormField
                  label="Company Name"
                  id="companyName"
                  value={form.companyName}
                  onChange={(value) =>
                    dispatch(updateField({ field: "companyName", value }))
                  }
                />
                <FormField
                  label="Email Address"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(value) =>
                    dispatch(updateField({ field: "email", value }))
                  }
                  required
                />
                <FormField
                  label="Telephone"
                  id="telephone"
                  type="tel"
                  value={form.telephone}
                  onChange={(value) =>
                    dispatch(updateField({ field: "telephone", value }))
                  }
                />
                <FormField
                  label="Your Enquiry"
                  id="enquiry"
                  value={form.enquiry}
                  onChange={(value) =>
                    dispatch(updateField({ field: "enquiry", value }))
                  }
                  multiline
                  required
                />

                {error && (
                  <p className="mb-4 text-sm text-red-600">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>

                <p className="mt-4 text-xs text-[#999999]">
                  By submitting your email address, you agree to receive updates
                  from Giavani Bathrooms in accordance with our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
