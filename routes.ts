// This file was automatically added by edgio init.
// You should commit this file to source control.
import { Router } from "@edgio/core/router";
import { nextRoutes } from "@edgio/next";

export default new Router()
  // NextRoutes automatically adds routes for all Next.js pages and their assets
  .use(nextRoutes)
  .match(
    { method: "GET", path: "/api/cache-control/bypass-client-cache/true" },
    {
      caching: {
        bypass_client_cache: true,
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/bypass-client-cache/false" },
    {
      caching: {
        bypass_client_cache: false,
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/treatment/pass" },
    {
      caching: {
        client_max_age: "10h",
        cache_control_header_treatment: "pass",
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/treatment/overwrite" },
    {
      caching: {
        client_max_age: "10h",
        cache_control_header_treatment: "overwrite",
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/treatment/if_missing-true" },
    {
      caching: {
        client_max_age: "10h",
        cache_control_header_treatment: "if_missing",
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/treatment/if_missing-false" },
    {
      caching: {
        client_max_age: "10h",
        cache_control_header_treatment: "if_missing",
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/treatment/remove" },
    {
      caching: {
        client_max_age: "10h",
        cache_control_header_treatment: "remove",
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/query-key/all" },
    {
      caching: {
        max_age: { 200: "1y" },
        client_max_age: "1y",
        cache_key_query_string: { include_all: true },
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/query-key/none" },
    {
      caching: {
        max_age: { 200: "1y" },
        client_max_age: "1y",
        cache_key_query_string: { exclude_all: true },
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/query-key/only-p" },
    {
      caching: {
        max_age: { 200: "1y" },
        client_max_age: "1y",
        cache_key_query_string: { include: ["p"] },
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/query-key/except-p" },
    {
      caching: {
        max_age: { 200: "1y" },
        client_max_age: "1y",
        cache_key_query_string: { include_all_except: ["p"] },
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/codes/default" },
    {
      caching: {
        max_age: "1y",
        client_max_age: "0y",
      },
    }
  )
  .match(
    { method: "GET", path: "/api/cache-control/codes/non-default" },
    {
      caching: {
        max_age: "1y",
        client_max_age: "0y",
        cacheable_status_codes: [500, 200],
        ignore_origin_no_cache: [200, 500],
      },
    }
  )
  .match(
    { path: "/api/cache-control/methods/default" },
    {
      caching: {
        max_age: "1y",
        client_max_age: "0y",
      },
    }
  )
  .match(
    { path: "/api/cache-control/methods/non-default" },
    {
      caching: {
        max_age: "1y",
        client_max_age: "0y",
        enable_caching_for_methods: ["POST"],
      },
    }
  )
  .match(
    { method: "GET", path: "/api/origin" },
    {
      origin: { set_origin: "simba" },
    }
  );
