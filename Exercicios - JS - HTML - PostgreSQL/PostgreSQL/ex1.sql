CREATE TABLE public.filmes
(
    id integer NOT NULL DEFAULT nextval('filmes_id_seq'::regclass),
    "Título" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "Diretor" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "Duração" "char",
    "Data de Lançamento" date NOT NULL,
    "Idioma" character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT filmes_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.filmes
    OWNER to postgres;