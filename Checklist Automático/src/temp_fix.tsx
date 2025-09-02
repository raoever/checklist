// Search for all remaining Select components with old onValueChange types

// 1. Find: onValueChange={(value: 'OK' | 'PARCIAL' | 'FALTA')
// Replace with: onValueChange={(value: 'NOT_VERIFIED' | 'OK' | 'PARCIAL' | 'FALTA')

// 2. Find: <SelectValue />
// Replace with: <SelectValue placeholder="Selecione o status" />

// 3. Add: <SelectItem value="NOT_VERIFIED">❓ Não verificado</SelectItem>
// Before the first existing SelectItem

// These are likely in the employee sections (funcionarios demissao, admissao, transferencia)