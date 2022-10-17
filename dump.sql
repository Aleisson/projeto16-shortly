--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer,
    token text NOT NULL,
    valid boolean DEFAULT true,
    "creatAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer,
    url text NOT NULL,
    short_url character varying(10) NOT NULL,
    visite_count integer DEFAULT 0,
    "creatAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(80) NOT NULL,
    email character varying(120) NOT NULL,
    hash_password text NOT NULL,
    "creatAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTk2NzA1MCwiZXhwIjoxNjY1OTg4NjUwfQ.DfGPph06ag8mpYM2r0tQ9rv8lu_1qUcRPurZQhH5W-c', true, '2022-10-16 21:37:30.855307');
INSERT INTO public.sessions VALUES (2, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2NTk2ODY2MSwiZXhwIjoxNjY1OTkwMjYxfQ.ksYadBMLZrFyKfuC0g__Y85BZ1RkJt8Ien9L682dpCI', true, '2022-10-16 22:02:06.979505');
INSERT INTO public.sessions VALUES (3, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NTk3MDEyMiwiZXhwIjoxNjY1OTkxNzIyfQ.ugg1qBzTrn7nXt46BnZjH7vs_CBJChxmGZzkTM5QAdk', true, '2022-10-16 22:28:42.872804');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (2, 1, 'www.google.com', '9TAEosg-', 0, '2022-10-16 21:38:24.74303');
INSERT INTO public.urls VALUES (4, 1, 'www.google.com', 'LlTNZzFq', 0, '2022-10-16 21:38:26.647719');
INSERT INTO public.urls VALUES (1, 1, 'www.google.com', 'SlQStI1X', 1, '2022-10-16 21:37:44.245606');
INSERT INTO public.urls VALUES (5, 1, 'https://github.com/', 'M_D2KzaB', 1, '2022-10-16 21:54:54.16648');
INSERT INTO public.urls VALUES (6, 2, 'https://github.com/', 'CQChrwf0', 0, '2022-10-16 22:06:20.664126');
INSERT INTO public.urls VALUES (7, 2, 'https://github.com/', '5XhWebZl', 5, '2022-10-16 22:06:23.421211');
INSERT INTO public.urls VALUES (8, 2, 'https://github2.com/', '0aL5I-DR', 0, '2022-10-16 22:27:06.53535');
INSERT INTO public.urls VALUES (9, 3, 'https://github2.com/', 'KEyxmckc', 0, '2022-10-16 22:28:55.408308');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'caio', 'caio@driven.com.br', '$2b$10$Tjbp3YJuQ.l95FsGWc/uPexI6qriINDR43TwJs9PmU4BiETDN8HWq', '2022-10-16 21:37:27.172731');
INSERT INTO public.users VALUES (2, 'caio2', 'caio2@driven.com.br', '$2b$10$Q8BSvPktUNgSItzR9YpDo.ykoSEH8DNhpkXDM35pxPhTtHHB7UthG', '2022-10-16 22:01:33.649965');
INSERT INTO public.users VALUES (3, 'caio2', 'caio3@driven.com.br', '$2b$10$czl/LjSBYsLxAClAsWVNP.n5a/GG3BBAxxDW7qZ58fdx6hf0O0uNq', '2022-10-16 22:28:36.526672');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 9, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

