import Link from "next/link";
import Container from "@/components/ui/Container";
import { CONTACT_INFO, FOOTER_LINKS } from "@/lib/constants/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <ul className="space-y-3">
              {FOOTER_LINKS.primary.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              {FOOTER_LINKS.secondary.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-xs leading-relaxed text-white/70">
            <p>
              <a
                href={CONTACT_INFO.phoneHref}
                className="transition-colors hover:text-white"
              >
                {CONTACT_INFO.phone}
              </a>
            </p>
            <p className="mt-2">
              <a
                href={CONTACT_INFO.emailHref}
                className="transition-colors hover:text-white"
              >
                {CONTACT_INFO.email}
              </a>
            </p>
            <p className="mt-2">
              {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city},{" "}
              {CONTACT_INFO.address.postcode}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/50">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
