DROP TABLE public."Account";

DROP TABLE public."Comment";

DROP TABLE public."Like";

DROP TABLE public."Post";

DROP TABLE public."Session";

DROP TABLE public."User";

DROP TABLE public."VerificationToken";

DROP TABLE public."_prisma_migrations";


DROP INDEX public."VerificationToken_identifier_token_key";

DROP INDEX public."VerificationToken_token_key";

DROP INDEX public."Account_provider_providerAccountId_key";

DROP INDEX public."Session_sessionToken_key";

DROP INDEX public."User_email_key";

DROP INDEX public."User_stripeCustomerId_key";

DROP INDEX public."User_subscriptionId_key";
