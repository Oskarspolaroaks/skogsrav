
# SEO Uzlabojumu Implementacijas Plans

## Parskats

Sis plans ietver visus SEO uzlabojumus no ieprieksejas atskaites, struktureti 8 galvenajas darbibas, kas uzlabos majaslapa redzamibu mekletajprogrammas un AI mekletajos (ChatGPT, Perplexity).

---

## 1. Izveidot sitemap.xml

**Fails:** `public/sitemap.xml`

Izveidot statisku XML sitemap ar visam lapam:
- Sakumlapa (/) - prioritate 1.0
- Services (/services) - prioritate 0.9
- About (/about) - prioritate 0.8
- FAQ (/faq) - prioritate 0.7
- Contact (/contact) - prioritate 0.8

Sitemap formata ieklauts:
- Pilni URL (https://skogsrav.com/...)
- Lastmod datums
- Changefreq (weekly/monthly)
- Priority vertibas

---

## 2. Atjauninat robots.txt

**Fails:** `public/robots.txt`

Pievienot:
- Sitemap direktiva ar pilnu URL
- Host direktiva
- Crawl-delay (pec izvelēs)

---

## 3. Paplašinat SEO komponentu

**Fails:** `src/components/SEO.tsx`

Pievienot jaunus props:
- `image` - OG attela URL
- `keywords` - lapas specifiskos atslēgvardus
- `author` - autors (nokluseti "Skogsrav")

Pievienot meta tagus:
- og:image un twitter:image
- keywords meta tags
- author meta tags
- Nokluseta OG attela logika

---

## 4. Pievienot SEO komponentu Index lapai

**Fails:** `src/pages/Index.tsx`

Pievienot:
- SEO komponenta importu
- indexSEO konfiguracija ar:
  - Title, description, canonical
  - Keywords
  - OG image
  - ProfessionalService JSON-LD schema

Tas nodrošinas dinamisku meta tagu parvaldību sakumlapai.

---

## 5. Atjauninat index.html ar pareiziem URL

**Fails:** `index.html`

Labot:
- OG image URL no Google Storage uz skogsrav.com/og-image.png
- Twitter image URL
- Nodrosinat, ka visi URL izmanto skogsrav.com domenu

---

## 6. Pievienot OG attelu atbalstu visam lapam

**Faili:**
- `src/pages/Services.tsx`
- `src/pages/About.tsx`
- `src/pages/FAQ.tsx`
- `src/pages/Contact.tsx`

Katrai lapai pievienot:
- image prop SEO komponenta
- Izmantot galveno /og-image.png vai lapas specifisku attelu

---

## 7. Pievienot Organization schema

**Fails:** `src/components/SEO.tsx` vai `index.html`

Pievienot globalu Organization JSON-LD:
- Uzņēmuma nosaukums, logo, URL
- Kontaktinformacija
- Socialie tikli (ja ir)
- sameAs property

---

## 8. Pievienot BreadcrumbList schema

**Fails:** `src/components/SEO.tsx`

Pievienot:
- breadcrumbs prop SEO komponenta
- BreadcrumbList JSON-LD generatoru
- Katrai apakšlapai definēt breadcrumb celus

---

## Tehniska implementacija

### Jaunie faili

| Fails | Merkis |
|-------|--------|
| public/sitemap.xml | Mekletajprogrammu indeksacija |

### Modificejamie faili

| Fails | Izmaiņas |
|-------|----------|
| public/robots.txt | Sitemap URL, Host |
| src/components/SEO.tsx | image, keywords props, Organization schema |
| src/pages/Index.tsx | SEO komponenta integracija |
| src/pages/Services.tsx | OG image prop |
| src/pages/About.tsx | OG image prop |
| src/pages/FAQ.tsx | OG image prop |
| src/pages/Contact.tsx | OG image prop |
| index.html | OG URL labojumi |

### SEO komponenta jauna struktura

```text
Props:
  - title (esoss)
  - description (esoss)
  - canonical (esoss)
  - type (esoss)
  - jsonLd (esoss)
  - image (JAUNS) - OG attela URL
  - keywords (JAUNS) - lapas atslēgvardi
  - breadcrumbs (JAUNS) - navigacijas cels
```

### Sitemap struktura

```text
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://skogsrav.com/</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://skogsrav.com/services</loc>
    ...
  </url>
  <!-- Parējas lapas -->
</urlset>
```

### Organization schema

```text
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Skogsrav",
  "url": "https://skogsrav.com",
  "logo": "https://skogsrav.com/og-image.png",
  "email": "hello@skogsrav.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Aristida Briana iela 18A-10",
    "addressLocality": "Riga",
    "postalCode": "LV-1001",
    "addressCountry": "LV"
  },
  "legalName": "SIA Skogsrav",
  "taxID": "LV42103071315"
}
```

---

## Vizualas integritates garantija

Visas izmaiņas tiks veiktas TIKAI:
- HTML head sadalā (meta tagi)
- SEO komponenta (Helmet)
- JSON-LD strukturetajos datos
- Jauni faili (sitemap.xml)

Nekadas netiks mainits:
- Vizualais saturs
- Teksti lapas
- Izskata elementi
- CSS stili

---

## Sagaidamie rezultati

1. Sitemap.xml - mekletajprogrammu indeksacija
2. Robots.txt - korekta crawling konfiguracija
3. Dinamiska meta tagu parvaldiba visam lapam
4. OG atteli socialajiem tikliem
5. Organization schema - uzņēmuma autoritāte
6. BreadcrumbList - navigacijas struktura
7. Korekti production URL (skogsrav.com)

---

## Implementacijas laiks

| Darbiba | Laiks |
|---------|-------|
| Sitemap.xml | 5 min |
| Robots.txt | 2 min |
| SEO komponenta paplasināsana | 15 min |
| Index.tsx SEO integracija | 10 min |
| Apakšlapu OG atteli | 10 min |
| Organization schema | 10 min |
| BreadcrumbList | 10 min |
| index.html labojumi | 5 min |
| **Kopā** | **~67 min** |
