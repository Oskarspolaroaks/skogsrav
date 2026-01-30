-- Create a public storage bucket for website images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-images',
  'website-images',
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
);

-- Allow public read access to all files in the bucket
CREATE POLICY "Public read access for website images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'website-images');

-- Allow authenticated users (admins) to upload/update/delete
CREATE POLICY "Admin upload access for website images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'website-images');

CREATE POLICY "Admin update access for website images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'website-images');

CREATE POLICY "Admin delete access for website images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'website-images');