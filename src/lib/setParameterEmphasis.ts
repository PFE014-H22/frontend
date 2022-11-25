/**
 * Sets the style of all instances of the parameter within the response's body of an
 * accepted answer, so that it stands out from the rest of the text.
 * 
 * @param parameter The parameter to put emphasis on within the text.
 * @param response_body The text containing the instances of the parameter.
 */
export const setParameterEmphasis = (
    parameter: string,
    response_body: string
) => {
    return response_body.replaceAll(parameter, `$<span class="emphasis">${parameter}</span>`);
}