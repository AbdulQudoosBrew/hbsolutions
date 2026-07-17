"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import FormField from "@/components/ui/FormField";
import Section from "@/components/ui/Section";
import TextSection from "@/components/ui/TextSection";
import { COMPANY, CONTACT_INFO, DESIGN_SECTION } from "@/lib/constants/siteData";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  resetForm,
  setError,
  setSubmitted,
  setSubmitting,
  updateField,
} from "@/lib/store/slices/contactSlice";

const CONTACT_BACKGROUND =
  "https://giavanibathrooms.com/wp-content/uploads/2023/12/sep09-scaled.jpg";

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
    <Section
      id="contact"
      background="transparent"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${CONTACT_BACKGROUND})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_55%)]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <FadeIn>
            <div className="flex h-full flex-col justify-between space-y-14 border-l border-white/20 pl-6 md:pl-8">
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/50">
                  Haris Building Solutions
                </p>
                <TextSection
                  title={DESIGN_SECTION.title}
                  paragraphs={[...DESIGN_SECTION.paragraphs]}
                  headingLevel="h2"
                  align="left"
                  color="light"
                />
              </div>

              <div className="border-t border-white/15 pt-10">
                <TextSection
                  title="General Enquiries"
                  headingLevel="h3"
                  align="left"
                  color="light"
                />

                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/45">
                      Phone
                    </p>
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="text-lg text-white transition-colors duration-300 hover:text-white/70"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/45">
                      Email
                    </p>
                    <a
                      href={CONTACT_INFO.emailHref}
                      className="text-sm text-white transition-colors duration-300 hover:text-white/70 md:text-base"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/45">
                      Head Office
                    </p>
                    <div className="text-sm leading-relaxed text-white/75">
                      <p>{CONTACT_INFO.address.company}</p>
                      <p>{CONTACT_INFO.address.street}</p>
                      <p>
                        {CONTACT_INFO.address.city}
                        {CONTACT_INFO.address.postcode
                          ? `, ${CONTACT_INFO.address.postcode}`
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="relative bg-transparent h-full overflow-hidden border border-white/15  p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-10">
              <div
                className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
                aria-hidden
              />

              <TextSection
                title="Trade Enquiry"
                paragraphs={[
                  "For any enquiries please fill in the form below:",
                ]}
                headingLevel="h2"
                align="left"
                color="light"
              />

              {isSubmitted ? (
                <div className="mt-8 border border-[#e0e0e0] bg-[#f8f8f8] p-8 text-center">
                  <p className="text-sm text-[#333333]">
                    Thank you for your enquiry. We will be in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => dispatch(resetForm())}
                    className="mt-4 text-xs uppercase tracking-[0.2em] text-[#666666] transition-colors hover:text-[#000000]"
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
                    className="transition-transform duration-300 hover:scale-[1.01]"
                  >
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                  </Button>

                  <p className="mt-4 text-xs text-[#999999]">
                    By submitting your email address, you agree to receive
                    updates from {COMPANY.name} in accordance with our Privacy
                    Policy.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
