# Convert string to valid url string action

This action takes any string and make sure it is a valid for inclusion as a url or domain name

## Inputs

### `string`

**Required** The name of the string to urlify.

## Outputs

### `urlified-string`

The urlified version of the string.

## Example usage

```yaml
uses: efiShtain/urlify-string@v1.0
with:
  string: "feature/ci/test-123"
```
