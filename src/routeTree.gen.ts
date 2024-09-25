/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProjectsImport } from './routes/projects'
import { Route as BlogImport } from './routes/blog'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ProjectsProjectIdImport } from './routes/projects.$projectId'
import { Route as BlogBlogIdImport } from './routes/blog.$blogId'

// Create/Update Routes

const ProjectsRoute = ProjectsImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const BlogRoute = BlogImport.update({
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsProjectIdRoute = ProjectsProjectIdImport.update({
  path: '/$projectId',
  getParentRoute: () => ProjectsRoute,
} as any)

const BlogBlogIdRoute = BlogBlogIdImport.update({
  path: '/$blogId',
  getParentRoute: () => BlogRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
    '/blog/$blogId': {
      id: '/blog/$blogId'
      path: '/$blogId'
      fullPath: '/blog/$blogId'
      preLoaderRoute: typeof BlogBlogIdImport
      parentRoute: typeof BlogImport
    }
    '/projects/$projectId': {
      id: '/projects/$projectId'
      path: '/$projectId'
      fullPath: '/projects/$projectId'
      preLoaderRoute: typeof ProjectsProjectIdImport
      parentRoute: typeof ProjectsImport
    }
  }
}

// Create and export the route tree

interface BlogRouteChildren {
  BlogBlogIdRoute: typeof BlogBlogIdRoute
}

const BlogRouteChildren: BlogRouteChildren = {
  BlogBlogIdRoute: BlogBlogIdRoute,
}

const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren)

interface ProjectsRouteChildren {
  ProjectsProjectIdRoute: typeof ProjectsProjectIdRoute
}

const ProjectsRouteChildren: ProjectsRouteChildren = {
  ProjectsProjectIdRoute: ProjectsProjectIdRoute,
}

const ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(
  ProjectsRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blog': typeof BlogRouteWithChildren
  '/projects': typeof ProjectsRouteWithChildren
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blog': typeof BlogRouteWithChildren
  '/projects': typeof ProjectsRouteWithChildren
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blog': typeof BlogRouteWithChildren
  '/projects': typeof ProjectsRouteWithChildren
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/blog'
    | '/projects'
    | '/blog/$blogId'
    | '/projects/$projectId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/blog'
    | '/projects'
    | '/blog/$blogId'
    | '/projects/$projectId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/blog'
    | '/projects'
    | '/blog/$blogId'
    | '/projects/$projectId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  BlogRoute: typeof BlogRouteWithChildren
  ProjectsRoute: typeof ProjectsRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  BlogRoute: BlogRouteWithChildren,
  ProjectsRoute: ProjectsRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/blog",
        "/projects"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/blog": {
      "filePath": "blog.tsx",
      "children": [
        "/blog/$blogId"
      ]
    },
    "/projects": {
      "filePath": "projects.tsx",
      "children": [
        "/projects/$projectId"
      ]
    },
    "/blog/$blogId": {
      "filePath": "blog.$blogId.tsx",
      "parent": "/blog"
    },
    "/projects/$projectId": {
      "filePath": "projects.$projectId.tsx",
      "parent": "/projects"
    }
  }
}
ROUTE_MANIFEST_END */
