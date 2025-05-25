import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const PAGE_SIZE = 20;

const fetchData = async (page) => {
    // Simulate API call — replace with real fetch
    return new Promise(resolve => {
        setTimeout(() => {
            const newItems = Array.from({ length: PAGE_SIZE }, (_, i) => ({
                id: `item-${page * PAGE_SIZE + i + 1}`,
                title: `Video ${page * PAGE_SIZE + i + 1}`,
            }));
            resolve(newItems);
        }, 1000);
    });
};

const YouTubeLikeApp = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

    useEffect(() => {
        loadMore();
    }, []);

    const loadMore = async () => {
        if (loading || allLoaded) return;  // Prevent multiple calls

        setLoading(true);
        const newData = await fetchData(page);

        if (newData.length === 0) {
            setAllLoaded(true);  // No more data
        } else {
            setData(prevData => [...prevData, ...newData]);
            setPage(prevPage => prevPage + 1);
        }
        setLoading(false);
    };

    const renderItem = ({ item }) => (
        <View style={{ padding: 20, borderBottomWidth: 1 }}>
            <Text>{item.title}</Text>
        </View>
    );

    const renderFooter = () => {
        if (!loading) return null;
        return <ActivityIndicator style={{ margin: 20 }} />;
    };

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}  // Trigger loadMore when 50% from bottom
            ListFooterComponent={renderFooter}
        />
    );
};

export default YouTubeLikeApp;
