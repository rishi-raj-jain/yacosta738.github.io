import type { CmsCollection } from 'netlify-cms-core';
export const collections: CmsCollection[] = [
	// Content collections
	{
		name: 'posts_es',
		label: 'Artículos',
		folder: 'src/content/blog/es',
		create: true,
		slug: '{{slug}}',
		label_singular: 'Artículo',
		fields: [
			{ label: 'Título', name: 'title', widget: 'string' },
			{ label: 'Descripción', name: 'description', widget: 'string' },
			{ label: 'Enlace', name: 'link', widget: 'string', required: false },
			{ label: 'Enlace Externo', name: 'isExternalLink', widget: 'boolean', required: false },
			{ label: 'Fecha', name: 'date', widget: 'datetime' },
			{
				label: 'Idioma',
				name: 'lang',
				widget: 'select',
				options: ['en', 'es'],
				default: 'es',
			},
			{ label: 'Cover', name: 'cover', widget: 'image', required: false },
			{ label: 'Autor', name: 'author', widget: 'string' },
			{
				label: 'Etiquetas',
				name: 'tags',
				widget: 'list',
				allow_add: true,
				default: ['IT'],
			},
			{
				label: 'Categories',
				name: 'categories',
				widget: 'list',
				allow_add: true,
				default: ['IT'],
			},
			{ label: 'Draft', name: 'draft', widget: 'boolean', default: true },
			{ label: 'Body', name: 'body', widget: 'markdown' },
		],
	},
	{
		name: 'roles_es',
		label: 'Roles',
		folder: 'src/content/jobs/roles/es',
		slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
		create: true,
		extension: 'json',
		fields: [
			{ label: 'Rol', name: 'role', widget: 'string' },
			{ label: 'Fecha de Inicio', name: 'startDate', widget: 'datetime' },
			{ label: 'Fecha de Fin', name: 'endDate', widget: 'datetime', required: false },
			{
				label: 'Logros',
				name: 'achievement',
				widget: 'list',
				allow_add: true,
				max: 4,
				label_singular: 'Logro',
			},
		],
	},
	{
		name: 'jobs_es',
		label: 'Trabajos',
		folder: 'src/content/jobs/es',
		slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
		create: true,
		extension: 'json',
		fields: [
			{ label: 'Título', name: 'title', widget: 'string' },
			{
				label: 'Idioma',
				name: 'lang',
				widget: 'select',
				options: ['en', 'es'],
				default: 'es',
			},
			{ label: 'Empresa', name: 'company', widget: 'string' },
			{ label: 'URL', name: 'url', widget: 'string', required: false },
			{ label: 'Icono', name: 'icon', widget: 'string' },
			{ label: 'Ubicación', name: 'location', widget: 'string' },
			{ label: 'Fecha de Creación', name: 'createDate', widget: 'datetime' },
			{ label: 'Publicado', name: 'published', widget: 'boolean', default: true },
			{
				label: 'Roles',
				name: 'roles',
				widget: 'relation',
				collection: 'roles_es',
				search_fields: ['role'],
				value_field: 'role',
				display_fields: ['role'],
			},
		],
	},
	{
		name: 'projects_es',
		label: 'Proyectos',
		folder: 'src/content/projects/es',
		slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
		create: true,
		extension: 'json',
		fields: [
			{ label: 'Título', name: 'title', widget: 'string' },
			{
				label: 'Idioma',
				name: 'lang',
				widget: 'select',
				options: ['en', 'es'],
				default: 'es',
			},
			{ label: 'Cover', name: 'cover', widget: 'image' },
			{ label: 'Fecha', name: 'date', widget: 'datetime' },
			{ label: 'Repositorio', name: 'repository', widget: 'string', required: false },
			{ label: 'URL', name: 'url', widget: 'string', required: false },
			{ label: 'Empresa', name: 'company', widget: 'string', required: false },
			{
				label: 'Tecnologías',
				name: 'tech',
				widget: 'relation',
				collection: 'tech',
				search_fields: ['name'],
				value_field: 'name',
				display_fields: ['name'],
			},
			{
				label: 'Mostrar en proyectos',
				name: 'showInProjects',
				widget: 'boolean',
				default: false,
			},
			{ label: 'Destacado', name: 'featured', widget: 'boolean', default: false },
			{ label: 'Prioridad', name: 'priority', widget: 'number', default: 0 },
			{ label: 'Publicado', name: 'published', widget: 'boolean', default: true },
			{ label: 'Contenido', name: 'content', widget: 'markdown' },
		],
	},
];

export default collections;