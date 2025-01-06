import { HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../../hooks/useLanguage";

const SOCIAL_MEDIA_INFO = [
    {
        id: 1,
        title: "github",
        href: "https://github.com/LewisContreras",
        icon: FaGithub
    },
    {
        id: 2,
        title: "linkedin",
        href: "https://www.linkedin.com/in/lewis-contreras",
        icon: FaLinkedin
    },
];


const SocialMediaLinks = () => {
  const { t } = useLanguage();
  return (
    <HStack spacing={2}>
        {
            SOCIAL_MEDIA_INFO.map((media) => (
                <Link
                  key={media.id}
                  href={media.href}
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                  isExternal
                  aria-label={t.footer[media.title].label}
                >
                  <Icon boxSize={5} color="terciary" as={media.icon}></Icon>
                </Link>
            ))
        }
    </HStack>
  );
};

export { SocialMediaLinks };
