import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Button } from "../../components/Form/Button";
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separador,
  Footer,
} from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separador />}
      />
      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
}
