# Convert string to valid url string action

This action takes any string and make sure it is a valid for inclusion as a url or domain name

## Algorithm

- lower case the string
- replace any non valid url characters with hyphen (-)
- remove trailing and ending hyphens
- truncate to 63 characters length
- trim spaces

Heavily based on gitlab's slugify from this link: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/utils.rb#L100

## Inputs

### `string`

**Required** The name of the string to urlify.

## Outputs

### `urlified-string`

The urlified version of the string.

## Example usage

```yaml
uses: efiShtain/urlify-string@v1.1
with:
  string: "feature/ci/test-123"
```
