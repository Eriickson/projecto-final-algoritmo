import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import {
  bblSort,
  binarySearch,
  insertElement,
  linearSearch,
  quickSort,
} from "../src/algorithms";

const IndexPage = () => {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [results, setResults] = useState({
    binarySearch: { isLoading: false, result: 0 },
    linearSearch: { isLoading: false, result: 0 },
    quickSort: { isLoading: false, result: 0 },
    insertElement: { isLoading: false, result: 0 },
    bblSort: { isLoading: false, result: 0 },
  });

  function generateArray() {
    try {
      const arrayGenerated = new Array(arrayIndex)
        .fill(0)
        .map((_) => Math.round(Math.random() * 100));

      [
        handleBblSort,
        handleBinarySearch,
        handleLinearSearch,
        handleQuickSort,
        handleInsertElement,
      ].forEach((handle) => {
        handle(arrayGenerated);
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleBblSort(array: any[]) {
    setResults({
      ...results,
      bblSort: { isLoading: true, result: 0 },
    });

    const bblSortTimeStart = performance.now();
    bblSort(array);
    const bblSortTimeEnd = performance.now();

    setResults({
      ...results,
      bblSort: { isLoading: false, result: bblSortTimeEnd - bblSortTimeStart },
    });
  }

  function handleBinarySearch(array: any[]) {
    setResults({
      ...results,
      binarySearch: { isLoading: true, result: 0 },
    });

    const binarySearchTimeStart = performance.now();
    binarySearch(array, array[Math.round(Math.random() * 100)]);
    const binarySearchTimeEnd = performance.now();

    setResults({
      ...results,
      binarySearch: {
        isLoading: false,
        result: binarySearchTimeEnd - binarySearchTimeStart,
      },
    });
  }

  function handleLinearSearch(array: any[]) {
    setResults({
      ...results,
      linearSearch: { isLoading: true, result: 0 },
    });

    const linearSearchTimeStart = performance.now();
    linearSearch(array, array[Math.round(Math.random() * 100)]);
    const linearSearchTimeEnd = performance.now();

    setResults({
      ...results,
      linearSearch: {
        isLoading: false,
        result: linearSearchTimeEnd - linearSearchTimeStart,
      },
    });
  }

  function handleQuickSort(array: any[]) {
    setResults({
      ...results,
      quickSort: { isLoading: true, result: 0 },
    });

    const quickSortTimeStart = performance.now();
    quickSort(array, 0, array.length - 1);
    const quickSortTimeEnd = performance.now();

    setResults({
      ...results,
      quickSort: {
        isLoading: false,
        result: quickSortTimeEnd - quickSortTimeStart,
      },
    });
  }
  function handleInsertElement(array: any[]) {
    setResults({
      ...results,
      insertElement: { isLoading: true, result: 0 },
    });

    const insertElementTimeStart = performance.now();
    insertElement(array, array.length, array[Math.round(Math.random() * 100)]);
    const insertElementTimeEnd = performance.now();

    setResults({
      ...results,
      insertElement: {
        isLoading: false,
        result: insertElementTimeEnd - insertElementTimeStart,
      },
    });
  }

  console.log(results);

  return (
    <Box h="100vh" w="100vw">
      <Center bgColor="gray.400" h="full">
        <Stack bgColor="white" borderWidth="1px" p="5" rounded="md" shadow="md">
          <Box minW="96">
            <FormControl>
              <FormLabel>Cantidad de elementos para el arreglo</FormLabel>
              <Input
                textAlign="right"
                type="number"
                onChange={(e) => setArrayIndex(Number(e.target.value))}
              />
            </FormControl>
          </Box>
          <List spacing={4}>
            <ListItem>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack mr="5">
                  <Text>Búsqueda Secuencial</Text>
                  {results.binarySearch.isLoading && (
                    <CircularProgress size="1rem" isIndeterminate />
                  )}
                </HStack>
                <HStack>
                  <Input
                    variant="filled"
                    textAlign="center"
                    readOnly
                    value={results.binarySearch.result}
                  />
                  <Text> ms</Text>
                </HStack>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack mr="5">
                  <Text>Búsqueda Binaria</Text>
                  {results.binarySearch.isLoading && (
                    <CircularProgress size="1rem" isIndeterminate />
                  )}
                </HStack>
                <HStack>
                  <Input
                    variant="filled"
                    textAlign="center"
                    readOnly
                    value={results.binarySearch.result}
                  />
                  <Text> ms</Text>
                </HStack>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack mr="5">
                  <Text>Algoritmo de Ordenamiento de la Burbuja</Text>
                  {results.bblSort.isLoading && (
                    <CircularProgress size="1rem" isIndeterminate />
                  )}
                </HStack>
                <HStack>
                  <Input
                    variant="filled"
                    textAlign="center"
                    readOnly
                    value={results.bblSort.result}
                  />
                  <Text> ms</Text>
                </HStack>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack mr="5">
                  <Text>Quick Sort</Text>
                  {results.quickSort.isLoading && (
                    <CircularProgress size="1rem" isIndeterminate />
                  )}
                </HStack>
                <HStack>
                  <Input
                    variant="filled"
                    textAlign="center"
                    readOnly
                    value={results.quickSort.result}
                  />
                  <Text> ms</Text>
                </HStack>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack mr="5">
                  <Text>Método de Inserción</Text>
                  {results.insertElement.isLoading && (
                    <CircularProgress size="1rem" isIndeterminate />
                  )}
                </HStack>
                <HStack>
                  <Input
                    variant="filled"
                    textAlign="center"
                    readOnly
                    value={results.insertElement.result}
                  />
                  <Text> ms</Text>
                </HStack>
              </Flex>
            </ListItem>
          </List>
          <Flex justifyContent="flex-end">
            <Button onClick={generateArray}>Correr algoritmos</Button>
          </Flex>
        </Stack>
      </Center>
    </Box>
  );
};

export default IndexPage;
